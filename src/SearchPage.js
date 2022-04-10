import React from 'react';
import './SearchPage.css';

import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>

            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s68-c-k-c0x00ffffff-no-rj"
                channel="Apna College"
                verified
                subs="660k"
                noOfVideos={382}
                description="You can find awesome programming!"
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />
            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />
            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />
            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />
            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />
            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />
            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />
            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />
            <VideoRow
                views="1.4M"
                subs="658k"
                description="Do you want a Free Online Training?"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCO28yaX6JQMXXf0xPsY2wV0Gmdfg"
            />



        </div>
    );
};

export default SearchPage;