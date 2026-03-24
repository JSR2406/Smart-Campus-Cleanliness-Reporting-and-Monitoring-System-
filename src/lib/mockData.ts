export const MOCK_COMPLAINTS = [
  {
    id: 1,
    description: "Overflowing dustbin near Block A entrance",
    location: "Block A, Main Entrance",
    status: "Pending",
    priority: "HIGH",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    image_url: "https://picsum.photos/seed/dustbin/800/600",
    User: { name: "John Doe", email: "john@example.com" },
    Assignment: null,
    Feedback: null
  },
  {
    id: 2,
    description: "Water leakage in 2nd floor washroom",
    location: "Block B, 2nd Floor Washroom",
    status: "In Progress",
    priority: "HIGH",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    image_url: "https://picsum.photos/seed/leak/800/600",
    User: { name: "Jane Smith", email: "jane@example.com" },
    Assignment: { staff: { name: "Mike Ross" } },
    Feedback: null
  },
  {
    id: 3,
    description: "Littering in the central garden area",
    location: "Central Garden",
    status: "Completed",
    priority: "LOW",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    completed_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
    image_url: "https://picsum.photos/seed/garden/800/600",
    User: { name: "Alice Brown", email: "alice@example.com" },
    Assignment: { staff: { name: "Harvey Specter" } },
    Feedback: { rating: 5, comment: "Great job, very quick!" }
  },
  {
    id: 4,
    description: "Broken window pane in Room 302",
    location: "Hostel 1, Room 302",
    status: "Closed",
    priority: "MEDIUM",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    completed_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    image_url: "https://picsum.photos/seed/window/800/600",
    User: { name: "Bob Wilson", email: "bob@example.com" },
    Assignment: { staff: { name: "Donna Paulsen" } },
    Feedback: null
  }
];

export const MOCK_STAFF = [
  { id: 101, name: "Mike Ross", email: "mike@campus.com" },
  { id: 102, name: "Harvey Specter", email: "harvey@campus.com" },
  { id: 103, name: "Donna Paulsen", email: "donna@campus.com" },
  { id: 104, name: "Rachel Zane", email: "rachel@campus.com" }
];

export const MOCK_ANALYTICS = {
  total: 42,
  completed: 28,
  byLocation: {
    "Block A": 12,
    "Block B": 8,
    "Hostel 1": 15,
    "Central Garden": 7
  },
  byStatus: {
    "Pending": 5,
    "Assigned": 4,
    "In Progress": 5,
    "Completed": 28
  },
  avgSLA_hours: "4.2",
  avgRating: "4.8",
  totalFeedback: 22,
  heatmapData: [
    { location: "Block A", count: 12 },
    { location: "Block B", count: 8 },
    { location: "Hostel 1", count: 15 },
    { location: "Central Garden", count: 7 }
  ]
};
