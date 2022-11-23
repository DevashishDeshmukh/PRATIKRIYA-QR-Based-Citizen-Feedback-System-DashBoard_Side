import React from 'react';

function Chartfeed(props) {
    const iframe = '<iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width=100% height="1000" src="https://charts.mongodb.com/charts-project-0-nptvo/public/dashboards/a473b491-921e-4814-ac45-6c3ebe8a574f?id=634b13bb-9155-4db9-8ae8-7c6719a12463&autoRefresh=60&theme=light"></iframe>'
    //const iframe1 = '<iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-nptvo?id=634b2c56-c341-4739-81a5-7e6a7cebd66b&autoRefresh=60&theme=light"></iframe>'
    const Iframe = () => {
        return (<div dangerouslySetInnerHTML={ {__html: iframe?iframe:""}} />);
    }
    return (
        <div>
            <Iframe iframe={iframe} />
            {/* <Iframe iframe={iframe1} /> */}
        </div>
    );
}

export default Chartfeed;