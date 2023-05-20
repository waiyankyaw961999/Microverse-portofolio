/* eslint-disable linebreak-style */

import { navItemsToggle, humburgerToggle } from './navbarToggler.js';
import data from '../data/projects.js';

// Navbar Toggler
document
  .querySelector('.nav-container .checkbox')
  .addEventListener('click', navItemsToggle);
document
  .querySelector('.nav-container .checkbox')
  .addEventListener('click', humburgerToggle);

// Modal
const closeButton = document.querySelectorAll('.btn-close');
const overlayModal = document.querySelector('.details-modal-overlay');
const detailsModal = document.querySelector('.details-modal');
const workLists = document.querySelector('.work-lists');

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

data.forEach((item) => {
  const project = document.createElement('div');
  project.innerHTML = `
  <div class="box flex flex-col">
  <div class="box-img">
    <img
      class="w-full h-full"
      src="${item.thumbnail}"
      alt="imgPlaceholder"
    />
  </div>
  <div class="box-content fw-600">
    <h2 class="">Multi-Post Stories Gain + Glory</h2>
    <div class="tags">
      <ul class="flex w-full justify-between">
        ${item.tags.map((tag) => `<li>${tag}</li>`).join('')}
      </ul>
    </div>
    <div class="flex justify-center">
      <button class="text-center btn text-white btn-view" type="button">
        See Project
      </button>
    </div>
  </div>
</div>
  `;
  workLists.appendChild(project);
});

const viewDetailButton = document.querySelectorAll('.btn-view');
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
