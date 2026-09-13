import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-slate-100 bg-white px-4 pt-14 text-slate-500 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Footer Main Content */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
                    {/* Brand Block */}
                    <div>
                        <a href="#home" className="inline-flex items-center">
                            <img
                                src={logo}
                                alt="Dev Stack Logo"
                                className="h-9 w-auto object-contain"
                            />
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-5 text-slate-400">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-5 text-sm font-medium">
                            <a
                                href="https://github.com/BonyAminAIUB"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-600 transition hover:text-pink-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://www.facebook.com/md.bony.amin.534899"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-600 transition hover:text-pink-500"
                            >
                                Facebook
                            </a>

                            <a
                                href="https://www.linkedin.com/in/md-bony-amin-50a653344/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-600 transition hover:text-pink-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a
                                    href="#home"
                                    className="transition hover:text-pink-500"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="transition hover:text-pink-500"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="transition hover:text-pink-500"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a
                                    href="#about"
                                    className="transition hover:text-pink-500"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="transition hover:text-pink-500"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#careers"
                                    className="transition hover:text-pink-500"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
                            Legal
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a
                                    href="#privacy"
                                    className="transition hover:text-pink-500"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#terms"
                                    className="transition hover:text-pink-500"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Dev Stack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="#privacy"
                            className="transition hover:text-pink-500"
                        >
                            Privacy
                        </a>

                        <a
                            href="#terms"
                            className="transition hover:text-pink-500"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;