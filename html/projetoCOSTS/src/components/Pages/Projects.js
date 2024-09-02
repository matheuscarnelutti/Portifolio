import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Message from '../Layout/Message';
import Container from '../Layout/Container';
import Loading from '../Layout/Loading';
import Styles from './Projects.module.css';
import LinkButton from '../Layout/LinkButton';
import ProjectCard from '../Project/ProjectCard';


function Projects() {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('')
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data);
                    setProjects(data);
                    setRemoveLoading(true);
                })
                .catch((err) => console.log(err));
        }, 300);
    }, []);

    function removeProject(id) {
        fetch(`http://localhost:3001/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id));
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={Styles.project_container}>
            <div className={Styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/NewProjet" text="Criar projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            budget={project.budget}
                            category={project.category ? project.category.name : 'Categoria não definida'}
                            key={project.id}
                            name={project.name}
                            handleRemove={removeProject} // Passa a função removeProject
                        />
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    );
}

export default Projects;
