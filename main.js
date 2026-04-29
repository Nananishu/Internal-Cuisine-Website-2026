<script>
     const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    });
    
    {/* This is the Hamburger menu toggle.
    The "const burger" selects the clickable icon (the hamburger icon) that users tap to open the menu!
    The "const links" selects the container holding the navbar list of links.
    the burger.addEventListener('click').... toggles the CSS class .open on the navigation links when the hamburger is clicked. */}
    
    const burger = document.getElementById('hamburger');
    const links  = document.getElementById('navLinks');
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

    