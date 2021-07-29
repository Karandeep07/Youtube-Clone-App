import React from 'react';
import VideoCard from './VideoCard';
import "./RecommendedVideos.css";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                title="Who has the Best PC at LTT??"
                views="11M views"
                timestamp="5 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSGE5pCFbd5alFmWeOJZPNjsEhkN1FCxFdYjaE3Og=s48-c-k-c0x00ffffff-no-rj"
                channel="Linus Tech Tips"
                image="https://img.youtube.com/vi/7CZq5SkIiu0/maxresdefault.jpg"
                />
                <VideoCard
                title="Dope Tech: Boston Dynamics Robot Dog"
                views="5.4M views"
                timestamp="2 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s88-c-k-c0x00ffffff-no-rj"
                channel="Marques Brownlee"
                image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/94b451100579611.5ff9a6374307b.jpg"
                />
                <VideoCard
                    title="Inside Billion-Euro Nuclear Reactor"
                    views="7.8M views"
                    timestamp="5 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLTn7ljFVHlZoPxxekAfuIzfhFPKhBblpYYHhaR4pQ=s88-c-k-c0x00ffffff-no-rj"
                    channel="Tom Scott "
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkuB-PwkWGxt_wgZVijOVZ3cd8K9RioE1pA&usqp=CAU"
                />
                <VideoCard
                    title="I Create a PERFECT SNAKE A.I."
                    views="7M views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR40ZQ6R9HV_DubPtXs9qSBLY-3L7bpK0L6xsEy=s88-c-k-c0x00ffffff-no-rj"
                    channel="Code Bullet"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4it1Cmp7f0F5QhS2X86E-m5PNr8L1z2RQQ&usqp=CAU"
                />
                <VideoCard
                    title="Intro to Blues Guitar - Grade 1"
                    views="29K views"
                    timestamp="3 week ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLTMduoDu-VEJKoWHzvZehP-qgE7DxS_0Gxuk69c=s88-c-k-c0x00ffffff-no-rj"
                    channel="Justin Guitar"
                    image="https://jtgt-static.b-cdn.net/images/default-social.png"
                />
                <VideoCard 
                title="Who has the Best PC at LTT??"
                views="11M views"
                timestamp="5 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLSGE5pCFbd5alFmWeOJZPNjsEhkN1FCxFdYjaE3Og=s48-c-k-c0x00ffffff-no-rj"
                channel="Linus Tech Tips"
                image="https://img.youtube.com/vi/7CZq5SkIiu0/maxresdefault.jpg"
                />
                <VideoCard
                title="Dope Tech: Boston Dynamics Robot Dog"
                views="5.4M views"
                timestamp="2 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s88-c-k-c0x00ffffff-no-rj"
                channel="Marques Brownlee"
                image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/94b451100579611.5ff9a6374307b.jpg"
                />
                <VideoCard
                    title="Inside Billion-Euro Nuclear Reactor"
                    views="7.8M views"
                    timestamp="5 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLTn7ljFVHlZoPxxekAfuIzfhFPKhBblpYYHhaR4pQ=s88-c-k-c0x00ffffff-no-rj"
                    channel="Tom Scott "
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkuB-PwkWGxt_wgZVijOVZ3cd8K9RioE1pA&usqp=CAU"
                />
                <VideoCard
                    title="I Create a PERFECT SNAKE A.I."
                    views="7M views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR40ZQ6R9HV_DubPtXs9qSBLY-3L7bpK0L6xsEy=s88-c-k-c0x00ffffff-no-rj"
                    channel="Code Bullet"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4it1Cmp7f0F5QhS2X86E-m5PNr8L1z2RQQ&usqp=CAU"
                />
                <VideoCard
                    title="Intro to Blues Guitar - Grade 1"
                    views="29K views"
                    timestamp="3 week ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLTMduoDu-VEJKoWHzvZehP-qgE7DxS_0Gxuk69c=s88-c-k-c0x00ffffff-no-rj"
                    channel="Justin Guitar"
                    image="https://jtgt-static.b-cdn.net/images/default-social.png"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
