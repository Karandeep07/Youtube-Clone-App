import React from 'react';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import "./SearchPage.css";
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://images.squarespace-cdn.com/content/v1/5213f93be4b08fcef374a832/1617906672030-8XVYWBQ1H4V0CGKYAV5A/icon_V6.png?format=500w"
            channel="Linus Tech Tips"
            verified
            subs="12.6M"
            noOfVideos={5,350}
            description="Tech can be complicated; we try to make it easy.
            Linus Tech Tips is a passionate team of professionally curious experts in consumer technology and video production which aims to inform and educate people of all ages through entertaining videos."
            />

            <hr/>

            <VideoRow
            views="6.5M"
            subs="12.6M"
            description="Thanks to MSI and Nvidia for sponsoring this build guide. This value focused build will get you the bells and whistles to enjoy great looking gaming within a tight budget. With a Ryzen 3600 and a Geforce RTX 2060 powering this build, you wont have all the frames, just most of them."
            channel="Linus Tech Tips"
            title="Building Pc Stream"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9zlf51Ld-vr0zprRHdOXyG6bd7I63Bo1Cw&usqp=CAU"
            />
             <VideoRow
            views="8.9M"
            subs="12.6M"
            description="The Asrock Rack EPC621D4I-2M makes NO sense... but that's exactly what made me fall in love with it."
            channel="Linus Tech Tips"
            title="This motherboard is STUPID.. and I love it!!"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt_zLpxzKhZkd0_vZFzWBgRMCNZSSRko8Uw&usqp=CAU"
            />
            <VideoRow
            views="2.3M"
            subs="12.6M"
            description="IOS, Android, OSX, Windows….. Now for Linux’s time in the spotlight. We reached out to our community again and you gave us lots to work with. Let's see why Linux is just better!"
            channel="Linus Tech Tips"
            title="Best Linux Distros"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3buEAyD8jn02Zisv5D7TetuFISZQPtxnB4Q&usqp=CAU"
            />
            <VideoRow
            views="6.9M"
            subs="12.6M"
            description="The Linus Media Group team has been expanding a lot in the past few years, and with it so has our office! Linus is here to show you all around and see what's been happening behind the scenes."
            channel="Linus Tech Tips"
            title="Studio Tour"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4ZhOu69dZKQBr0N3znxY9C09S5VictKOEA&usqp=CAU"
            />
            <VideoRow
            views="1.8M"
            subs="12.6M"
            description="With real-time raytracing availability almost reaching 3 years of time, people starting to actually ask if they should future proof for RTX. But can you tell if RTX is even on?"
            channel="Linus Tech Tips"
            title="Is RTX a Total Waste of Money??"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrpTjcNYBYQp8YsQ3D3ozsO96hVUgTZ5LYw&usqp=CAU"
            />
        </div>
    )
}

export default SearchPage;
