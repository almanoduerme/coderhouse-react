import { useState, useContext, useRef } from "react";
import "./Cart.css";
import Togglable from "../Togglable/Togglable";
import ContactForm from "../ContactForm/ContactForm";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import {
  writeBatch,
  getDoc,
  doc,
  addDoc,
  collection,
  Timestamp,
} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";
import { useNotificationServices } from "../../services/notification/NotificationServices";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const [orderFinished, setOrderFinished] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
  });
  const { cart, clear, getTotalPrice, removeItem } = useContext(CartContext);

  const contactFormRef = useRef();

  const setNotification = useNotificationServices();

  const confirmOrder = () => {
    if (
      contact.phone !== "" &&
      contact.address !== "" &&
      contact.comment !== "" &&
      contact.name !== ""
    ) {
      setProcessingOrder(true);

      const objOrder = {
        buyer: contact,
        items: cart,
        total: getTotalPrice(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(firestoreDb);
      const outOfStock = [];

      const executeOrder = () => {
        if (outOfStock.length === 0) {
          addDoc(collection(firestoreDb, "orders"), objOrder)
            .then(({ id }) => {
              batch.commit().then(() => {
                clear();
                setNotification(
                  "success",
                  `La orden se genero exitosamente, su numero de orden es: ${id}`
                );
                setOrderFinished(true);
              });
            })
            .catch((error) => {
              setNotification("error", error);
            })
            .finally(() => {
              setProcessingOrder(false);
            });
        } else {
          outOfStock.forEach((prod) => {
            setNotification(
              "error",
              `El producto ${prod} no tiene stock disponible`
            );
            removeItem(prod);
          });
        }
      };

      objOrder.items.forEach((prod) => {
        getDoc(doc(firestoreDb, "products", prod.item.id))
          .then((response) => {
            if (response.data().stock >= prod.quantity) {
              batch.update(doc(firestoreDb, "products", response.id), {
                stock: response.data().stock - prod.quantity,
              });
            } else {
              outOfStock.push(response.data().album);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            executeOrder();
          })
          .finally(() => {
            setProcessingOrder(false);
          });
      });
    } else {
      setNotification(
        "error",
        "Debe completar los datos de contacto para generar la orden"
      );
    }
  };

  if (processingOrder) {
    return <h1>Se esta procesando su orden...</h1>;
  }

  if (cart.length === 0 && orderFinished === false) {
    return (
      <div>
        <h1>Cart</h1>
        <h2>No hay productos en el carrito</h2>
      </div>
    );
  } else if (orderFinished === true) {
    return (
      <div>
        <h1>Cart</h1>
        <h2>Su orden se ha generado exitosamente</h2>
        <NavLink to="/">
          <Button name="Volver al inicio" />
        </NavLink>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((p, key) => (
        <CartItem key={key} {...p} />
      ))}
      <h3>Total: ${getTotalPrice()}</h3>
      <button onClick={() => clear()} className="Button">
        Cancelar compra
      </button>
      <button onClick={() => confirmOrder()} className="Button">
        Confirmar Compra
      </button>
      {contact.phone !== "" &&
        contact.address !== "" &&
        contact.comment !== "" &&
        contact.name !== "" && (
          <div>
            <h4>Nombre: {contact.name}</h4>
            <h4>Telefono: {contact.phone}</h4>
            <h4>Direccion: {contact.address}</h4>
            <h4>Comentario: {contact.comment}</h4>
            <button
              onClick={() =>
                setContact({ phone: "", address: "", comment: "" })
              }
              className="Button"
              style={{ backgroundColor: "#db4025" }}
            >
              Borrar datos de contacto
            </button>
          </div>
        )}
      <Togglable
        buttonLabelShow={
          contact.phone !== "" &&
          contact.address !== "" &&
          contact.comment !== "" &&
          contact.name !== ""
            ? "Editar contacto"
            : "Agregar contacto"
        }
        ref={contactFormRef}
      >
        <ContactForm
          toggleVisibility={contactFormRef}
          setContact={setContact}
        />
      </Togglable>
    </div>
  );
};

export default Cart;
