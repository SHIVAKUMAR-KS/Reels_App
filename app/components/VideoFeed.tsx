"use client";
import React from "react";
import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  return (
    <div className="space-y-12">
      {/* Video Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoComponent key={video._id?.toString()} video={video} />
          ))}

          {videos.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-base-content/70">No videos found</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Example Image Display with ImageKit */}
          {/* You can add more images here or dynamically map through image data */}
          <IKImage
            urlEndpoint={urlEndpoint}
            path="default-image.jpg"
            width={400}
            height={400}
            alt="Alt text for image"
          />
          <IKImage
            urlEndpoint={urlEndpoint}
            path="default-image.jpg"
            width={400}
            height={400}
            alt="Alt text for image"
          />
        </div>
      </section>
    </div>
  );
}
