import { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "./components.css";
function CapstonePage() {
	const [projects, setProjects] = useState([
		{
			name: "Cultral Mural",
			description: "Mural in NYUAD",
			role: "Designer/Painter",
			contact: "tina@nyu.edu",
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
		setProjects((prev) => [...prev, formData]);
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
			<button onClick={openModal}>Add Project</button>

			<Modal
				isOpen={showModal}
				contentLabel="Add Project"
				ariaHideApp={false}
				className="modal"
				overlayClassName="modal__bg"
			>
				<div className="form">
					<div className="form__title">New Project Information</div>
					<div className="form__input">
						<label>Project Name</label>
						<input
							onChange={handleInputChange}
							placeholder="Project Name"
							name="name"
							value={formData.name}
						></input>
					</div>

					<div className="form__input">
						<label>Description</label>
						<input
							onChange={handleInputChange}
							placeholder="Project Description"
							name="description"
							value={formData.description}
						></input>
					</div>
					<div className="form__input">
						<label>Contacts</label>
						<input
							onChange={handleInputChange}
							placeholder="Student Contact"
							name="contact"
							value={formData.contact}
						></input>
					</div>

					<div className="form__input">
						<label>Collaborator Description</label>
						<input
							onChange={handleInputChange}
							placeholder="What role are you looking for?"
							name="role"
							value={formData.role}
						></input>
					</div>

					<div className="form__button">
						<button onClick={closeModal} className="cancel">
							Cancel
						</button>
						<button onClick={addProject}>Add Project</button>
					</div>
				</div>
			</Modal>

			<div className="project__container">
				{projects.map((project) => {
					return <Project project={project}></Project>;
				})}
			</div>
		</div>
	);
}

function Project({ project }) {
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
		toast(
			`Collaboration invitation sent to ${project.contact} (${project.name})`
		);
		closeModal();
		setFormData({});
	}
	return (
		<>
			<div className="project" onClick={openModal}>
				<div className="project__name">{project.name}</div>
				<div className="project__contact">{project.contact}</div>
				<div className="project__description">{project.description}</div>
				<div className="project__role">Looking for: {project.role}</div>
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

export default CapstonePage;
