import { useState, useRef } from "react"
import FocusTrap from "focus-trap-react"

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const firstInputRef = useRef(null)
  const modalRef = useRef(null)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  const onActivate = () => {
    modalRef.current.classList.add("active")
  }

  const onDeactivate = () => {
    modalRef.current.classList.remove("active")
  }

  return (
    <>
      <div>
        <button onClick={openModal} className="button">
          Open Modal
        </button>
      </div>

      {isOpen && (
        <FocusTrap
          focusTrapOptions={{
            onPostActivate: () => {
              firstInputRef.current.focus()
            },
            onActivate,
            onDeactivate,
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
          }}
        >
          <div
            className="modal-content"
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
            ref={modalRef}
          >
            <h2 id="modal-title">Modal Title</h2>
            <p aria-describedby="modal-content">Modal content goes here...</p>
            <input type="text" ref={firstInputRef} />
            <button className="link-button" onClick={closeModal}>
              Close Modal
            </button>
            <a href="#" className="link-href" id="modal-link">
              Some tabbable element
            </a>
          </div>
        </FocusTrap>
      )}
    </>
  )
}

export default Modal
