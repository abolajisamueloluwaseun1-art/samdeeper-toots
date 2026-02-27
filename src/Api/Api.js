export const homeData = {
  hero: {
    title: "Discover The Best DevOps Tools",
    subtitle: "Compare, filter and explore DevOps technologies easily.",
    backgroundImage: "https://images.unsplash.com/photo-1591696205602-02f8edeb50d5?auto=format&fit=crop&w=1470&q=80",
     primaryBtn: "View Tools",
    secondaryBtn: "Explore Categories"
  },

  stats: {
    totalTools: 50,
    categories: 8,
    monthlyVisitors: "12K+",
    activeUsers: "5K+"
  },

  featuredTools: [
    {
      name: "Docker",
      slug: "docker",
      image: "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
      category: "Containers"
    },
    {
      name: "Kubernetes",
      slug: "kubernetes",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      category: "Containers"
    },
    {
      name: "GitHub Actions",
      slug: "github-actions",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      category: "CI/CD"
    }
  ],

  categories: [
    {
      id: 1,
      name: "CI/CD",
      description: "Automate building, testing, and deployment",
      icon: "🔁",
      image: "https://images.unsplash.com/photo-1581091012184-7c12c3f381d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Containers",
      description: "Containerization and orchestration tools",
      icon: "📦",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4438aa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Monitoring",
      description: "Monitor systems and applications",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1612831455549-9c7a17b2f5b1?auto=format&fit=crop&w=800&q=80"
    }
  ],

  trendingTools: [
    "docker",
    "kubernetes",
    "github-actions"
  ],

  banners: [
    {
      id: 1,
      title: "New Tools Added!",
      description: "Check out the latest DevOps tools added this month.",
      link: "/tools"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Frontend Developer",
      feedback: "This platform helped me understand DevOps tools easily and improved my workflow!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Mark Smith",
      role: "DevOps Engineer",
      feedback: "Great resource to compare tools and see pros & cons before trying them out.",
      rating: 4.5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ],

  newsletter: {
    title: "Stay Updated!",
    subtitle: "Subscribe to our newsletter for latest DevOps tools and tutorials.",
    placeholder: "Enter your email",
    buttonText: "Subscribe"
  },

  seo: {
    title: "DevOps Tools Directory - Compare & Explore DevOps Tools",
    description: "Discover the best DevOps tools for CI/CD, Containers, Monitoring, and Cloud.",
    keywords: ["DevOps", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"]
  }
};

export const toolsData = [
  {
    id: 1,
    name: "Docker",
    category: "Containers",
    description: "Platform for building and running containers.",
    logo: "/logos/docker.png",
    officialLink: "https://docker.com",
    pros: [
      "Lightweight containers",
      "Easy deployment",
      "Huge community"
    ],
    cons: [
      "Learning curve",
      "Networking complexity"
    ]
  },
  {
    id: 2,
    name: "Kubernetes",
    category: "Containers",
    description: "Container orchestration platform.",
    logo: "/logos/kubernetes.png",
    officialLink: "https://kubernetes.io",
    pros: [
      "Auto scaling",
      "Self healing",
      "Cloud native"
    ],
    cons: [
      "Very complex",
      "Steep learning curve"
    ]
  },
  {
    id: 3,
    name: "Jenkins",
    category: "CI/CD",
    description: "Open-source automation server.",
    logo: "/logos/jenkins.png",
    officialLink: "https://jenkins.io",
    pros: [
      "Plugin ecosystem",
      "Highly customizable"
    ],
    cons: [
      "Old UI",
      "Manual setup required"
    ]
  },
  {
    id: 4,
    name: "GitHub Actions",
    category: "CI/CD",
    description: "CI/CD automation inside GitHub.",
    logo: "/logos/github-actions.png",
    officialLink: "https://github.com/features/actions",
    pros: [
      "Easy GitHub integration",
      "Free tier available"
    ],
    cons: [
      "Limited outside GitHub"
    ]
  }
]
