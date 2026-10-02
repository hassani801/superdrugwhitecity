import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Play, X, Heart, ExternalLink, Sparkles } from "lucide-react";
import { socialPosts, SocialPost } from "../data/social";
import { SmartImage } from "./ui/SmartImage";

export const InstagramGrid: React.FC = () => {
  const [activePost, setActivePost] = useState<SocialPost | null>(null);

  return (
    <section id="social" className="w-full py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#E8E3E6]">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#EC008C] mb-2 flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>@SUPERDRUG · WHITE CITY FEED</span>
            </div>
            <h2 className="section-title font-black text-[#231F20] tracking-[-0.035em]">
              WHAT'S HAPPENING IN STORE?
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm sm:text-base text-[#707070] max-w-sm">
            Beauty tips, staff favourites, new finds and everyday moments from Westfield White City.
          </p>
        </div>

        {/* Editorial Masonry Social Grid: 6 varied cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {socialPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActivePost(post)}
              className={`group cursor-pointer rounded-2xl overflow-hidden bg-[#F8F6F7] border border-[#E8E3E6] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ${
                post.aspectClass.includes("col-span-2") ? "sm:col-span-2" : ""
              }`}
              data-cursor={post.mediaType === "video" ? "play" : "view"}
            >
              {/* Media Container */}
              <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden bg-[#F3EEF1]">
                <SmartImage
                  src={post.image}
                  alt={post.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {post.mediaType === "video" ? (
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#231F20] shadow-md transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5 text-[#EC008C]" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#231F20] shadow-md">
                      <Instagram className="w-5 h-5 text-[#EC008C]" />
                    </div>
                  )}
                </div>

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="bg-[#231F20]/90 backdrop-blur-xs text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
                    {post.category}
                  </span>
                  <span className="bg-white/90 backdrop-blur-xs text-[#231F20] text-[10px] font-semibold px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-2xs">
                    <Heart className="w-3 h-3 fill-[#EC008C] text-[#EC008C]" />
                    {post.likes}
                  </span>
                </div>
              </div>

              {/* Caption & Post Details */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading font-bold text-base text-[#231F20] mb-2 group-hover:text-[#EC008C] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#707070] leading-relaxed line-clamp-2">
                    {post.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E3E6] flex items-center justify-between text-[11px] text-[#707070]">
                  <span className="font-medium text-[#231F20]">{post.handle}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View on Instagram Bar */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/superdrug"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#231F20] text-[#231F20] text-xs font-bold uppercase tracking-widest rounded-md hover:bg-[#231F20] hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#EC008C]" />
            <span>FOLLOW @SUPERDRUG ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#707070]" />
          </a>
        </div>
      </div>

      {/* Social Post Detail / Video Modal */}
      <AnimatePresence>
        {activePost && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E8E3E6] max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="p-4 border-b border-[#E8E3E6] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#EC008C]/15 flex items-center justify-center">
                    <Instagram className="w-3.5 h-3.5 text-[#EC008C]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#231F20]">superdrug_whitecity</p>
                    <p className="text-[10px] text-[#707070]">Westfield London · In-store moment</p>
                  </div>
                </div>
                <button
                  onClick={() => setActivePost(null)}
                  className="w-8 h-8 rounded-full border border-[#E8E3E6] flex items-center justify-center hover:bg-[#F8F6F7]"
                >
                  <X className="w-4 h-4 text-[#231F20]" />
                </button>
              </div>

              {/* Media viewer */}
              <div className="relative aspect-16/10 bg-black overflow-hidden flex items-center justify-center">
                {activePost.mediaType === "video" && activePost.videoUrl ? (
                  <video
                    src={activePost.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                    poster={activePost.image}
                  />
                ) : (
                  <SmartImage
                    src={activePost.image}
                    alt={activePost.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Caption and likes */}
              <div className="p-5 overflow-y-auto">
                <div className="flex items-center justify-between text-xs text-[#707070] mb-2">
                  <span className="font-bold text-[#EC008C] uppercase tracking-wider text-[10px]">
                    {activePost.category}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#231F20]">
                    <Heart className="w-3.5 h-3.5 fill-[#EC008C] text-[#EC008C]" />
                    {activePost.likes} likes
                  </span>
                </div>
                <h4 className="font-heading font-black text-lg text-[#231F20] mb-2">
                  {activePost.title}
                </h4>
                <p className="text-sm text-[#707070] leading-relaxed mb-4">
                  {activePost.caption}
                </p>
                <div className="p-3 bg-[#F8F6F7] rounded-lg text-xs text-[#231F20] flex items-center justify-between">
                  <span>Available to explore at Superdrug Westfield White City</span>
                  <span className="font-bold text-[#EC008C]">W12 7GF</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
