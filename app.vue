<template>
  <header id="header" class="bg-white w-full px-6 py-5 shadow-md">
    <div class="max-w-5xl mx-auto flex items-center flex-wrap justify-between">
      <div class="sm:mr-8">
        <a class="flex items-center" href="/">
          <span class="text-xl text-teal-700 font-semibold self-center">AI Blog</span></a>
      </div>
      <nav id="menu" class="order-last md:order-none items-center flex-grow w-full md:w-auto md:flex hidden mt-2 md:mt-0">
        <NuxtLink to="/about"
          class="block mt-4 md:inline-block md:mt-0 font-medium text-slate-700 hover:text-teal-600 text-base mr-4">About
        </NuxtLink>
      </nav>
    </div>
  </header>
  <div class="container mx-auto p-8">
    <NuxtPage />
  </div>
  <footer class=" mt-20 px-10 py-8 bg-slate-200">
    <div class="max-w-5xl mx-auto text-slate-700 text-center">© 2023 <a href="/" class="font-medium" target="_blank"
        rel="noopener">AI Blog</a>.</div>
  </footer>
</template>
