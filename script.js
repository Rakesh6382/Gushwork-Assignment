// Quote button
document.getElementById('quoteBtn').addEventListener('click', () => {
  alert('Custom quote request initiated!');
});

// Specs button
document.getElementById('specsBtn').addEventListener('click', () => {
  alert('Redirecting to technical specifications...');
});
// Datasheet download button
document.getElementById('downloadBtn').addEventListener('click', () => {
  alert('Downloading full technical datasheet...');
});
// Request a Quote button
document.getElementById('requestQuoteBtn').addEventListener('click', () => {
  alert('Quote request submitted!');
});
// FAQ accordion toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Catalogue form submission
document.getElementById('catalogueForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  alert(`Catalogue request submitted for: ${email}`);
});
// Manufacturing process navigation
document.querySelectorAll('.process-nav li').forEach(step => {
  step.addEventListener('click', () => {
    document.querySelectorAll('.process-nav li').forEach(li => li.classList.remove('active'));
    step.classList.add('active');
    alert(`Showing details for: ${step.textContent}`);
  });
});
// Talk to an Expert button
document.getElementById('expertBtn').addEventListener('click', () => {
  alert('Connecting you to an expert...');
});
// Download links
document.querySelectorAll('.download-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert(`Downloading: ${link.previousElementSibling.textContent}`);
  });
});
// Contact form submission
document.getElementById('quoteForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  alert(`Thank you ${name}, your custom quote request has been submitted!`);
});
