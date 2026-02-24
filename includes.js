const headerTemplate = `
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-6">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center">
                <a href="index.html" class="flex items-center gap-3 cursor-pointer decoration-transparent">
                    <div class="bg-slate-900 p-2 rounded-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <span class="text-xl font-bold text-slate-900 tracking-tight">BEDUSEC</span>
                </a>

                <div class="hidden md:flex items-center gap-8">
                    <a href="index.html#expertise" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Expertise</a>
                    <a href="about.html" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About Us</a>
                    <a href="services.html" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Services</a>
                    <a href="github.html" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">GitHub</a>
                    <a href="contact.html" class="bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-lg font-semibold text-sm shadow-lg shadow-slate-900/10 active:scale-95 transition-all">Contact Firm</a>
                </div>

                <button class="md:hidden" id="mobile-menu-btn" aria-label="Toggle Menu">
                    <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </div>
        
        <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
            <a href="index.html#expertise" class="text-left text-base font-medium text-slate-600 py-2">Expertise</a>
            <a href="about.html" class="text-left text-base font-medium text-slate-600 py-2">About Us</a>
            <a href="services.html" class="text-left text-base font-medium text-slate-600 py-2">Services</a>
            <a href="github.html" class="text-left text-base font-medium text-slate-600 py-2">GitHub</a>
            <a href="contact.html" class="bg-slate-900 text-white w-full py-4 rounded-lg font-semibold text-center block">Contact Firm</a>
        </div>
    </nav>
`;

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = headerTemplate;
        this.initInteractions();
    }

    initInteractions() {
        const navbar = this.querySelector('#navbar');
        const mobileMenuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled-nav');
            } else {
                navbar.classList.remove('scrolled-nav');
            }
        });

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

customElements.define('app-header', AppHeader);