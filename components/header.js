class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
        .glass-nav {
            background: rgba(10, 10, 10, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
    </style>
    <nav class="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
                    <img src="/assets/logo-whte.png" alt="Baranded Logo" class="h-10 w-auto">
                </div>

                <!-- CTA Buttons -->
                <div class="hidden md:flex items-center space-x-4">
                    <a href="https://app.baranded.com/login" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Login</a>
                    <a href="https://app.baranded.com/signup" class="px-5 py-2.5 rounded-full bg-white text-dark-900 text-sm font-bold hover:bg-brand-400 hover:text-dark-900 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                        Start Free
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-slate-300 hover:text-white focus:outline-none">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-dark-900 border-b border-white/5">
            <div class="px-4 pt-2 pb-6 space-y-2">
                <div class="flex flex-col gap-3">
                    <a href="https://app.baranded.com/login" class="block text-center text-slate-300 hover:text-white font-medium">Login</a>
                    <a href="https://app.baranded.com/signup" class="block text-center px-5 py-3 rounded-lg bg-brand-500 text-white font-bold hover:bg-brand-400 transition-colors">Start Free</a>
                </div>
            </div>
        </div>
    </nav>
    `;

    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Logic for Mobile Menu
    const btn = this.querySelector('#mobile-menu-btn');
    const menu = this.querySelector('#mobile-menu');

    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }

    // Logic for Sticky Navbar Glass Effect
    const nav = this.querySelector('#navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        nav.classList.add('shadow-lg');
      } else {
        nav.classList.remove('shadow-lg');
      }
    });
  }
}

customElements.define('site-header', SiteHeader);
