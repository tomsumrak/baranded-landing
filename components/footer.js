class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-dark-950 py-12 border-t border-white/5 text-sm text-slate-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="flex items-center gap-2">
                <img src="/assets/logo-whte.png" alt="Baranded Logo" class="h-10 w-auto">
            </div>

            <div class="flex gap-8">
                <a href="/baranded-plus" class="hover:text-white transition-colors">Pricing</a>
                <a href="https://app.baranded.com/privacy" class="hover:text-white transition-colors">Privacy Policy</a>
                <a href="https://app.baranded.com/terms" class="hover:text-white transition-colors">Terms of Use</a>
            </div>

            <div>
                &copy; 2025 Baranded. All rights reserved.
            </div>
        </div>
    </footer>
    `;

    // Initialize Lucide icons if any are added in the future or present
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

customElements.define('site-footer', SiteFooter);
