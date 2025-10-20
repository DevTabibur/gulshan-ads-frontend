# BiggaponBD Advertising Platform

Welcome to **BiggaponBD** – your all-in-one platform for streamlined multi-platform advertising management. This project enables businesses and agencies to launch, track, and optimize advertising campaigns across multiple channels (Facebook, Google, TikTok, Meta, and more) with ease.

---

## 🚀 Features

- **Unified Campaign Dashboard:** Manage multiple ad platforms from a single interface.
- **Quick Account Setup:** Register, verify, and start advertising in minutes.
- **Modular Homepage:** Dynamic homepage sections with customizable content.
- **Platform Showcases:** Dedicated sections for platforms like Meta and TikTok.
- **How It Works:** Step-by-step onboarding showcased with modern UI/UX.
- **Secure API Integration:** Robust backend endpoints for secure section updates.
- **Mobile Responsive:** Seamless experience on desktop and mobile devices.
- **Dark Mode Support:** Modern, accessible design for all users.

---

## 🏗️ Tech Stack

- **Frontend:** Next.js, React, Framer Motion, TailwindCSS
- **Backend/API:** NodeJS, Express (assumed), RESTful APIs
- **Auth:** JWT/OAuth (token-based, via `adsToken`)
- **State Management:** React Hooks
- **Storage:** Local Storage for auth/session tokens

---

## 📂 Project Structure

```
components/
├── Hero.tsx
├── TrustedBy.tsx
├── PlatformShowcase.tsx
├── MetaShowcase.tsx
├── AboutGulshanAds.tsx
├── HowItWorks.tsx
├── Layout.tsx
app/
└── api/
    ├── homepage/
    │   └── homepage.Api.ts
    └── tiktokPage/
        └── tiktokpage.Api.ts
pages/
└── index.tsx
```

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-org/biggaponbd.git
cd biggaponbd
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Environment Configuration

Create a `.env.local` file at the root with:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-endpoint.com
```
*(Replace with your actual API endpoint)*

### 4. Run the Development Server

```sh
npm run dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

---

## 🛡️ API Usage

### Homepage Section APIs

- `GET /home-page` — Get all homepage sections.
- `POST /home-page/promote-your-business` — Create/Update "Promote Your Business" section.
- `POST /home-page/trusted-by-leading` — Modify "Trusted by Leading" section.
- ...and more.

### TikTok Page APIs

- `GET /tiktok-page` — Fetch all TikTok page sections.
- `POST /tiktok-page/access-to-new-audience` — Manage TikTok audience access section.
- ...etc.

**_All POST endpoints require a valid `adsToken` (bearer token) stored in local storage._**

---

## 🖥️ Key Components

- **HomePage.tsx:** Main landing page, composed with modular sections.
- **HowItWorks.tsx:** Animated 4-step onboarding walkthrough, using Framer Motion.
- **API Files:** Contains all backend endpoint integrations with authentication headers.

---

## 📖 Example: Adding a New Section

1. Update your API (add a new endpoint in `/app/api/homepage/`).
2. Create a new React component in `/components/`.
3. Import and add the component in `components/pages/HomePage.tsx`.

---

## 📝 Contributing

We welcome contributions! To get started:

1. Fork this repository.
2. Create your feature branch: `git checkout -b feature/YourAwesomeFeature`
3. Commit your changes: `git commit -am 'Add a new feature'`
4. Push to the branch: `git push origin feature/YourAwesomeFeature`
5. Open a Pull Request.

---

## 🧩 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for full text.

---

## 🙌 Credits

Developed and maintained by the BiggaponBD Team.

For questions and support, please contact [support@biggaponbd.com](mailto:support@biggaponbd.com).

---

