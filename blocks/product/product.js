export default function decorate(block) {
    const productWrapper = document.createElement("div");
    productWrapper.className = "product-carousel-wrapper";
    
    const productContainer = document.createElement("div");
    productContainer.className = "product-carousel-container";
    
    // Move children to the carousel container, but skip <h2> inside a nested <div>
    [...block.children].forEach((child) => {
        const h2Element = child.querySelector('h2');
        if (h2Element) {
            console.log("HERE-------", h2Element)
            // If there's an h2, keep the parent div in the block, but remove the h2 itself
            block.append(child);
            h2Element.remove(); // Remove the h2 to prevent duplication
        } else {
            // Append other elements (e.g., images) to the carousel
            productContainer.append(child);
        }
    });
    
    productWrapper.append(productContainer);
    block.append(productWrapper);
  
    // Create a wrapper for the buttons
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "carousel-buttons-wrapper";
  
    // Add buttons based on the images
    [...productContainer.children].forEach((productDiv, index) => {
      const imgElement = productDiv.querySelector('img');
      if (imgElement) {
        const button = document.createElement("button");
        button.className = "carousel-button";
        button.style.backgroundImage = `url(${imgElement.src})`;
        button.style.backgroundSize = "cover";
        button.dataset.index = index;
  
        button.addEventListener("click", () => {
          currentIndex = index;
          updateCarousel();
        });
  
        buttonWrapper.append(button);
      }
    });
  
    productWrapper.append(buttonWrapper);
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const productWidth = productContainer.children[0].offsetWidth;
      productContainer.style.transform = `translateX(-${currentIndex * productWidth}px)`;
    }
    // Initial carousel position
    updateCarousel();
}

  