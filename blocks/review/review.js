export default function decorate(block) {
    // Create the main review container
    const reviewContainer = document.createElement('div');
    reviewContainer.className = 'review';
  
    // Extract existing rows from the block
    const rows = [...block.children];
  
    // Process each row
    rows.forEach((row) => {
      const starText = row.querySelectorAll('p')[0].textContent;
      const percentageText = row.querySelectorAll('p')[1].textContent;
      const percentage = parseInt(percentageText, 10);
  
      const reviewRow = document.createElement('div');
      reviewRow.className = 'review-row';
  
      // Create the star label
      const label = document.createElement('div');
      label.className = 'review-label';
      label.innerHTML = `<p>${starText}</p>`;
      
      // Create the progress bar container
      const barContainer = document.createElement('div');
      barContainer.className = 'review-bar';
      
      // Create the progress bar
      const progressBar = document.createElement('div');
      progressBar.className = 'progress';
      progressBar.style.width = `${percentage}%`;  // Use the percentage directly for width
      
      barContainer.appendChild(progressBar);
      
      // Create the number label
      const number = document.createElement('div');
      number.className = 'review-number';
      number.innerHTML = `<p>${percentageText}</p>`;
      
      // Append all parts to the review row
      reviewRow.appendChild(label);
      reviewRow.appendChild(barContainer);
      reviewRow.appendChild(number);
      
      // Append the review row to the review container
      reviewContainer.appendChild(reviewRow);
    });
  
    // Clear the block's content and append the review component
    block.textContent = '';
    block.append(reviewContainer);
  }
  