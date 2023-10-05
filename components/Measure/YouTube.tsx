import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CenteredVideoContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio for responsive sizing */
  width: 70%; /* You can adjust the width as needed */
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface CenteredYouTubeVideoProps {
  videoId: string;
}

const CenteredYouTubeVideo: React.FC<CenteredYouTubeVideoProps> = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <CenteredVideoContainer>
      <VideoWrapper>
        <VideoIframe
          src={videoUrl}
          title="YouTube Video"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>
    </CenteredVideoContainer>
  );
};

export default CenteredYouTubeVideo;