import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioGrid.css';

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// With CSS columns, order flows top→bottom left col, then top→bottom right col.
// So items 1&2 go in left col, items 3&4 go in right col.
const projects = [
  {
    id: 'drank',
    name: 'Shareable drink rankings',
    tag: 'Drank',
    thumbColor: 'thumb-drank',
    thumbHeight: 'thumb-tall',
    to: 'https://drank.app',
    external: true,
    delay: 'delay-1',
  },
  {
    id: 'checkt',
    name: 'Habit tracking with accountability',
    tag: 'Checkt',
    thumbColor: 'thumb-checkt',
    thumbHeight: 'thumb-short',
    to: '/checkt',
    external: false,
    delay: 'delay-3',
  },
  {
    id: 'augene',
    name: 'Simplifying skincare for patients & clinics',
    tag: 'Augene Beauty',
    thumbColor: 'thumb-augene',
    thumbHeight: 'thumb-short',
    to: '/augene',
    external: false,
    delay: 'delay-2',
  },
  {
    id: 'innod',
    name: 'Engaging event web pages',
    tag: 'Innovative Design',
    thumbColor: 'thumb-innod',
    thumbHeight: 'thumb-tall',
    to: '/innod',
    external: false,
    delay: 'delay-4',
  },
];

const ProjectCard = ({ project }) => {
  const inner = (
    <>
      <div className={`project-thumbnail ${project.thumbColor} ${project.thumbHeight}`} />
      <div className='project-meta'>
        <span className='project-meta-name'>{project.name}</span>
        <span className='project-meta-tag'>{project.tag}</span>
      </div>
    </>
  );

  const cls = `project-card fade-in ${project.delay}`;

  if (project.external) {
    return (
      <div className={cls}>
        <a className='project-link' href={project.to} target='_blank' rel='noreferrer'>
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div className={cls}> 
      <Link className='project-link' to={project.to} onClick={scrollTop}>
        {inner}
      </Link>
    </div>
  );
};

const PortfolioGrid = () => (
  <section className='grid-container'>
    {projects.map(p => <ProjectCard key={p.id} project={p} />)}
  </section>
);

export default PortfolioGrid;