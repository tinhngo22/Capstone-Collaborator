import { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "./components.css";
function CollaboratorPage() {
	const [collaborators, setCollaborators] = useState([
		{
			name: "Alex",
			description: "experience working on short film",
			role: "Designer/Videographer",
			contact: "abc@nyu.edu",
		},
	]);

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		role: "",
		contact: "",
	});
	const [showModal, setShowModal] = useState(false);

	function openModal() {
		setShowModal(true);
	}

	function closeModal() {
		setShowModal(false);
	}

	function addProject() {
		setCollaborators((prev) => [...prev, formData]);
		closeModal();
		setFormData({});
	}

	function handleInputChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	return (
		<div className="tab">
			<button onClick={openModal}>Add Contact</button>

			<Modal
				isOpen={showModal}
				contentLabel="Add Collaborator"
				ariaHideApp={false}
				className="modal"
				overlayClassName="modal__bg"
			>
				<div className="form">
					<div className="form__title">New Collaborator</div>
					<div className="form__input">
						<label>Your Name</label>
						<input
							onChange={handleInputChange}
							placeholder="Collaborator Name"
							name="name"
							value={formData.name}
						></input>
					</div>

					<div className="form__input">
						<label>Description</label>
						<input
							onChange={handleInputChange}
							placeholder="Extra Description"
							name="description"
							value={formData.description}
						></input>
					</div>
					<div className="form__input">
						<label>Contacts</label>
						<input
							onChange={handleInputChange}
							placeholder="Your Contact"
							name="contact"
							value={formData.contact}
						></input>
					</div>

					<div className="form__input">
						<label>Collaborator Description</label>
						<input
							onChange={handleInputChange}
							placeholder="What role are you volunteering for?"
							name="role"
							value={formData.role}
						></input>
					</div>

					<div className="form__button">
						<button onClick={closeModal} className="cancel">
							Cancel
						</button>
						<button onClick={addProject}>Add Contact</button>
					</div>
				</div>
			</Modal>

			<div className="project__container">
				{collaborators.map((collaborator) => {
					return <Collaborator collaborator={collaborator}></Collaborator>;
				})}
			</div>
		</div>
	);
}

function Collaborator({ collaborator }) {
	const [showModal, setShowModal] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		contact: "",
		message: "",
	});

	function openModal() {
		setShowModal(true);
	}

	function closeModal() {
		setShowModal(false);
	}

	function handleInputChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}
	function signUp() {
		toast(`Collaboration invitation sent to ${collaborator.contact} `);
		closeModal();
		setFormData({});
	}
	return (
		<>
			<div className="project" onClick={openModal}>
				<div className="project__name">{collaborator.name}</div>
				<div className="project__contact">{collaborator.contact}</div>
				<div className="project__description">{collaborator.description}</div>
				<div className="project__role">
					Volunteering for: {collaborator.role}
				</div>
			</div>

			<Modal
				isOpen={showModal}
				contentLabel="Sign up"
				ariaHideApp={false}
				className="modal"
				overlayClassName="modal__bg"
			>
				<div className="form">
					<div className="form__title">Leave Contact</div>
					<div className="form__input">
						<label>Your Name</label>
						<input
							onChange={handleInputChange}
							placeholder="Enter your name"
							name="name"
							value={formData.name}
						></input>
					</div>

					<div className="form__input">
						<label>Contacts</label>
						<input
							onChange={handleInputChange}
							placeholder="Enter your contact"
							name="contact"
							value={formData.contact}
						></input>
					</div>
					<div className="form__input">
						<label>Messages</label>
						<input
							onChange={handleInputChange}
							placeholder="Leave a message for collaborator"
							name="message"
							value={formData.message}
						></input>
					</div>

					<div className="form__button">
						<button onClick={closeModal} className="cancel">
							Cancel
						</button>
						<button onClick={signUp}>Submit</button>
					</div>
				</div>
			</Modal>
		</>
	);
}

export default CollaboratorPage;
