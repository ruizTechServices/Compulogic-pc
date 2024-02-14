<!--C:\Users\COMPULOGIC\Desktop\gios's Stuffs\compulogic-pc\websites\Compulogic-pc\src\lib\components\cardSection.svelte-->

<script>
  let cardImages = [
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.4.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  let cardTitles = [
    "Custom Builds",
    "Hardware Upgrades",
    "Generic computer workspace",
    "Laptop and code",
    "Computer gears",
    "Coding on a laptop",
    "Keyboard and mouse",
    "Close-up of typing",
    "Computer setup with code",
    "Tablet and stylus",
    // The last title is not needed since there are only 10 images
  ];

  let cardDescriptions = [
    "Tailor your computing experience with our custom build services. Whether for gaming, work, or anything in-between, we've got you covered.",
    "Keep your system at the cutting edge with our hardware upgrade services. From SSDs to graphics cards, we ensure your PC runs at its best.",
    "Explore our wide range of computer workspaces designed for productivity and ergonomics.",
    "Dive into the world of coding with our selection of laptops optimized for developers.",
    "Discover the latest in computer gears, from high-performance components to innovative peripherals.",
    "Join the coding revolution with laptops that bring your ideas to life, anywhere, anytime.",
    "Enhance your typing experience with our premium keyboards and mice, designed for comfort and precision.",
    "Get closer to your work with tools that improve accuracy and speed in typing tasks.",
    "Set up your ultimate computer setup with our expert advice and top-notch components.",
    "Bridge creativity and technology with our range of tablets and styluses, perfect for artists and designers.",
  ];

  let currentIndex = 0;

  function goNext() {
    currentIndex = (currentIndex + 1) % cardImages.length; // Loop back to the first card at the end
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + cardImages.length) % cardImages.length; // Loop back to the last card from the first
  }
</script>

<section class="container mx-auto px-4 py-16 flex flex-col items-center">
  <h2 class="text-3xl font-bold mb-8">Services</h2>

  <!-- Carousel Container -->
  <div class="relative flex items-center justify-center">
    <!-- Previous Button -->
    <button
      class="absolute left-0 z-10 bg-gray-800 text-white p-4"
      on:click={goPrev}
    >
      Prev
    </button>

    <!-- Only display the current card -->
    <div
      class="card bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      style="min-width: 300px; max-width: 100%;"
    >
      <img
        src={cardImages[currentIndex]}
        alt={cardTitles[currentIndex]}
        class="rounded-t-lg"
      />
      <div class="p-4">
        <h3 class="text-lg font-medium mb-2">{cardTitles[currentIndex]}</h3>
        <p class="text-gray-600">{cardDescriptions[currentIndex]}</p>
      </div>
    </div>

    <!-- Next Button -->
    <button
      class="absolute right-0 z-10 bg-gray-800 text-white p-4"
      on:click={goNext}
    >
      Next
    </button>
  </div>
</section>
