export interface SocialPost {
  id: string;
  category: "STAFF PICK" | "TUTORIAL" | "STORE MOMENT" | "VIRAL FIND" | "CLINIC" | "NEW IN";
  title: string;
  caption: string;
  handle: string;
  likes: string;
  mediaType: "image" | "video";
  videoUrl?: string;
  image: string;
  aspectClass: string; // for masonry rhythm: tall, square, wide, large
  date: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: "social-01",
    category: "VIRAL FIND",
    title: "Friday Restock Rush at White City",
    caption: "The lip oil aisle has just been fully restocked before the weekend crowd arrives! Swatching our top 4 shades on camera.",
    handle: "@superdrug_whitecity",
    likes: "4.2k",
    mediaType: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-lipstick-in-front-of-a-mirror-39824-large.mp4",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    aspectClass: "row-span-2 col-span-1",
    date: "Yesterday"
  },
  {
    id: "social-02",
    category: "STAFF PICK",
    title: "Amina's 3-Minute Glass Skin Routine",
    caption: "Our White City skin specialist breaks down how to layer hyaluronic serum and barrier cream under makeup.",
    handle: "@superdrug_whitecity",
    likes: "3.1k",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    aspectClass: "col-span-1",
    date: "2 days ago"
  },
  {
    id: "social-03",
    category: "STORE MOMENT",
    title: "Morning Golden Hour at the Fragrance Island",
    caption: "First customer through the doors testing the new Sol de Janeiro body mist spray bar. Pure summer energy.",
    handle: "@superdrug_whitecity",
    likes: "5.8k",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80",
    aspectClass: "col-span-2",
    date: "3 days ago"
  },
  {
    id: "social-04",
    category: "TUTORIAL",
    title: "White City Brow Bar Transformation",
    caption: "Watch this subtle precision thread and tint reshape that frames the eyes without looking overly stamped.",
    handle: "@superdrug_whitecity",
    likes: "2.9k",
    mediaType: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-makeup-looking-at-camera-39826-large.mp4",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
    aspectClass: "row-span-2 col-span-1",
    date: "4 days ago"
  },
  {
    id: "social-05",
    category: "CLINIC",
    title: "Clean piercing station setup",
    caption: "A look inside our certified hygienic piercing suite before our 11am appointment. Titanium studs ready.",
    handle: "@superdrug_whitecity",
    likes: "1.8k",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
    aspectClass: "col-span-1",
    date: "5 days ago"
  },
  {
    id: "social-06",
    category: "NEW IN",
    title: "Korean Beauty Shelf Drops Today",
    caption: "We just unboxed the latest glass skin toners and snail mucin serums. Grab them while stocks last in Aisle 3!",
    handle: "@superdrug_whitecity",
    likes: "6.4k",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    aspectClass: "col-span-1",
    date: "6 days ago"
  }
];
