export default function decorate(block) {
    // Select all tab containers
    const tabContainers = block.querySelectorAll('.product-tabs > div');
    
    // Create a wrapper for tabs and content
    const tabButtonsWrapper = document.createElement('div');
    tabButtonsWrapper.className = 'tab-buttons-wrapper';

    // Create a wrapper for content
    const tabContentWrapper = document.createElement('div');
    tabContentWrapper.className = 'tab-content-wrapper';

    tabContainers.forEach((tabContainer, index) => {
        // Get the button and content divs
        const buttonDiv = tabContainer.children[0];
        const contentDiv = tabContainer.children[1];

        // Move buttonDiv to tabButtonsWrapper
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button';
        tabButton.innerHTML = buttonDiv.innerHTML;
        tabButtonsWrapper.appendChild(tabButton);

        // Hide content by default and move it to tabContentWrapper
        contentDiv.classList.add('tab-content');
        if (index === 0) {
            contentDiv.style.display = 'block'; // Show the first tab's content
            tabButton.classList.add('active'); // Set the first tab as active
        } else {
            contentDiv.style.display = 'none'; // Hide others
        }
        tabContentWrapper.appendChild(contentDiv);

        // Add click event to show the corresponding content
        tabButton.addEventListener('click', () => {
            // Hide all content and remove active class from all buttons
            tabContentWrapper.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });
            tabButtonsWrapper.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('active');
            });

            // Show the clicked content and set button as active
            contentDiv.style.display = 'block';
            tabButton.classList.add('active');
        });
    });

    // Append the wrappers to the block
    block.innerHTML = ''; // Clear existing HTML
    block.appendChild(tabButtonsWrapper);
    block.appendChild(tabContentWrapper);
}
