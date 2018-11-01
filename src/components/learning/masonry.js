import * as React from 'react';
import Bricks from 'bricks.js';
import { Card } from 'antd';
import defaultImg from '../../img/head_default.jpg';

const imgArr = [
    {
        title: 'yangzhou1',
        desc: 'hahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou2',
        desc: 'hahahhahahahhahhahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou3',
        desc: 'hahahhahahahhahhahahhahahahhahhahahhahahahhahhahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou4',
        desc: 'hahahhahahahhahhahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou5',
        desc: 'hahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou6',
        desc: 'hahahhahahahhahhahahhahahahhahhahahhahahahhahhahahhahahahhahhahahhahahahhahhahahhahahahhahhahahhahahahhahhahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou7',
        desc: 'hahahhahahahhahhahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou8',
        desc: 'hahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou9',
        desc: 'hahahhahahahhahhahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou10',
        desc: 'hahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    },
    {
        title: 'yangzhou11',
        desc: 'hahahhahahahhahhahahhahahahhahhahahhahahahhahhahahhahahahhahhahahhahahahhah',
        img: defaultImg,
        QRcode: defaultImg
    }
]

const { Meta } = Card;

let itemPage = 1;

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            galleryItems: [
                {
                    title: 'yangzhou7',
                    desc: 'hahahhahahahhahhahahhahahahhah',
                    img: defaultImg,
                    QRcode: defaultImg
                }
            ],
            clientWidth: 0
        };
        this.instance = {}
    }

    getItems(limit){

        setTimeout(() => {
            const arrLength = imgArr.length;
            let start = limit*(itemPage - 1);
            let end = limit*itemPage + 1;

            start = start >= arrLength ? (arrLength-1) : start;
            end = end >= arrLength ? (arrLength-1) : end;
            
            const addItems = imgArr.slice(start, end);
            const prevGallery = this.state.galleryItems;
            if(addItems.length > 0) {
                this.setState({
                    galleryItems: [
                        ...prevGallery,
                        ...addItems
                    ]
                });
            }
        }, 500)
    }

    //获取屏幕宽度

    //绑定滚轮事件
    onWindowResize() {
        // console.log('hahahah');
        this.setState({
            clientWidth: document.body.clientWidth
        });
    }
    

    componentDidMount(){

        window.addEventListener('resize', () => {
            this.onWindowResize();
        });

        console.log(document.body.clientWidth);
        this.onWindowResize();



        this.getItems(5)
        //sizes for Brick.js
        const sizes = [
          { columns: 4, gutter: 3 },
          { mq: '0px', columns: 4, gutter: 3 },
          { mq: '1024px', columns: 4, gutter: 3 },
          { mq: '1680px', columns: 4, gutter: 3 },
          { mq: '1920px', columns: 4, gutter: 3 }
        ]
        //init instance
        this.instance = Bricks({
          container: '.gallery',
          packed: 'packed',
          sizes: sizes
        })
        this.instance.resize(true);  //<-adds a resize event listener
        if (this.state.galleryItems.length > 0) {
          this.instance.pack() //<- This should create the masonry layout
        }
    }

    componentDidUpdate(){
        if (this.state.galleryItems.length > 0) {
          return this.instance.pack()
        }
        else{
          return this.instance.update() //<- updates the layout
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    render() {

        const items = this.state.galleryItems.map((item, _id) => {
            return (
                <Card
                className="gallery-card"
                style={{ width: this.state.clientWidth/5 }}
                hoverable
                key={ _id }
                cover={<img alt="example" src={ item.img } />}
              >
                <Meta
                  title= { item.title }
                  description= { item.desc }
                />
              </Card>
            );
        })

        return (
            <div>
                <div className="gallery">
                    {items}
                </div>
            </div>
        );
    }
}

export default Gallery;