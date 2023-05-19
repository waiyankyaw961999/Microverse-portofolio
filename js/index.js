/* eslint-disable linebreak-style */

import { navItemsToggle, humburgerToggle } from './navbarToggler.js';
import data from '../data/projects.js';

// Navbar Toggler
document.querySelector('.nav-container .checkbox').addEventListener('click', navItemsToggle);
document.querySelector('.nav-container .checkbox').addEventListener('click', humburgerToggle);

// Modal
const viewDetailButton = document.querySelectorAll('.btn-view');
const closeButton = document.querySelectorAll('.btn-close');
const overlayModal = document.querySelector('.details-modal-overlay');
const detailsModal = document.querySelector('.details-modal');

closeButton.forEach((button) => {
  button.addEventListener('click', () => {
    overlayModal.style.opacity = '0';
    detailsModal.style.visibility = 'hidden';
    // Clearing the data from the modal
    detailsModal.querySelector('.project-title').innerHTML = '';
    const tags = detailsModal.querySelector('.details-tags ul');
    while (tags.hasChildNodes()) {
      tags.removeChild(tags.firstChild);
    }
    const desc = detailsModal.querySelector('.details-body');
    while (desc.hasChildNodes()) {
      desc.removeChild(desc.firstChild);
    }
    const detailsLinks = detailsModal.querySelectorAll('.detail-btn a');
    detailsLinks[0].setAttribute('href', '#');
  });
});

viewDetailButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Loading the data from the json file
    const projectData = data[index];
    detailsModal.querySelector('.project-title').innerHTML = projectData.title;
    const tag = detailsModal.querySelector('.details-tags ul');
    projectData.tags.forEach((item) => {
      tag.appendChild(document.createElement('li')).innerHTML = item;
    });
    const desc = detailsModal.querySelector('.details-body');

    const detailImg = detailsModal.querySelector('.detail-img');
    detailImg.setAttribute('src', projectData.thumbnail);

    projectData.desc.forEach((item) => {
      desc.appendChild(document.createElement('p')).innerHTML = item;
    });
    const detailsLinks = detailsModal.querySelectorAll('.detail-btn a');
    detailsLinks[0].setAttribute('href', projectData.liveUrl);
    detailsLinks[1].setAttribute('href', projectData.liveUrl);

    overlayModal.style.opacity = '1';
    detailsModal.style.visibility = 'visible';
  });
});