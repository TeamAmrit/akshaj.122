​let submissionCount = 0;

document.getElementById('wasteForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const wasteType = document.getElementById('wasteType').value;
  const feedbackDiv = document.getElementById('feedback');

  submissionCount++;

  let status = '';
  if (wasteType === 'Mixed') {
    feedbackDiv.innerText = 'Non-Compliant: Please segregate waste properly!';
    feedbackDiv.className = 'feedback non-compliant';
    status = 'Non-Compliant';
  } else {
    feedbackDiv.innerText = 'Compliant: Thank you for proper segregation!';
    feedbackDiv.className = 'feedback compliant';
    status = 'Compliant';
  }
  feedbackDiv.style.display = 'block';

  // Update Dashboard
  const table = document.getElementById('dashboardTable');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${submissionCount}</td><td>${wasteType}</td><td>${status}</td>`;
  table.appendChild(row);

  document.getElementById('wasteForm').reset();
});
