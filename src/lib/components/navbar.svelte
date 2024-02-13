<script>
  let isOpen = false; // State to handle mobile menu toggle
</script>

<nav class="bg-blue-500 text-white font-bold h-50">
  <div class="max-w-6xl mx-auto px-4 h-20">
    <div class="flex justify-between">
      <div class="flex space-x-4">
        <!-- logo -->
        <div>
          <a
            href="/"
            class="flex items-center text-gray-700 lg:hover:bg-orange-500 rounded-full lg:p-5 lg:bg-black"
          >
            <!-- Replace this with your actual logo -->
            <!-- Incorrect usage of <link> tag for image. Use <img> tag instead -->
            <img src="/src/lib/images/CL-LOGO.png" alt="Logo" class="lg:w-20 lg:h-20 h-10 w-10" />
          </a>
        </div>
        <!-- primary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="/" class="py-5 px-3 hover:text-gray-900">Home</a>
          <a href="#" class="py-5 px-3 hover:text-gray-900">About</a>
          <a href="#" class="py-5 px-3 hover:text-gray-900">Services</a>
          <a href="#" class="py-5 px-3 hover:text-gray-900">Contact</a>
        </div>
      </div>
      <!-- secondary nav -->
      <div class="hidden md:flex items-center space-x-1">
        <a
          href="#"
          class="py-2 px-3 bg-green-500 hover:bg-green-600 text-white rounded transition duration-300"
          >Login/Signup</a
        >
      </div>
      <!-- mobile button -->
      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button" on:click={() => (isOpen = !isOpen)}>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path></svg
          >
        </button>
      </div>
    </div>
  </div>
  <!-- mobile menu -->
  <div class:hidden={!isOpen} class="md:hidden">
    <a href="/" class="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
    <!-- Login and Signup buttons for mobile -->
    <div class="m-4 p-4">
      <button
        class="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white rounded mb-2"
        >Login</button
      >
      <button
        class="w-full py-2 bg-green-500 hover:bg-green-700 text-white rounded"
        >Signup</button
      >
    </div>
    <!-- logout button mobile -->
    <div class="m-4 p-4">
      <button
        class="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white rounded mb-2"
        >Logout</button
      >
    </div>
  </div>
</nav>
