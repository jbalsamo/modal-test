import { Button, Modal } from "solid-bootstrap";
import { createSignal } from "solid-js";

const [show, setShow] = createSignal(false);
const [name, setName] = createSignal("");
const [action, setAction] = createSignal("");
const handleOpen = () => setShow(true);
const handleClose = () => setShow(false);
const handleSubmit = () => {
  setShow(false);
  setAction("alert");
};

const Popup = (props: any) => {
  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Launch demo modal
      </Button>

      <Modal show={show()} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="Name"
              placeholder="Full Name"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
export { action, name, setAction, setName };
