import React from 'react';
import PropTypes from 'prop-types';

let largerThanAnyPageSize = 9999999
let largerThanWindow = 2

class Matrix extends React.Component {
    constructor(props:any) {
        super(props)

        this.state = {}
        this.draw = this.draw.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this)
    }

    componentDidMount() {
        this.setState({}, () => {
            let columns:any = []
            let context = this.refs.canvas.getContext('2d')
            let size = this.props.colSize


            // let characters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
            // 'abcdefghijklmnopqrstuvwxyz', '1234567890', '!@#$%^&*()'];
            
            
            // function getRandomCapital(){
            //     let index = Math.floor(Math.random() * characters[0].length);
            //     return (characters[0][index]);
            // }

            const characters ='アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズブヅプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

            function generateString(length) {
                let result = ' ';
                const charactersLength = characters.length;
                for ( let i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
            
                return result;
            }

            let source = generateString(50)
            let width = this.props.fullscreen ? window.innerWidth * largerThanWindow : this.props.width
            let height = this.props.fullscreen ? window.innerHeight * largerThanWindow : this.props.height
            let canvas = this.refs.canvas
            canvas.width = width
            canvas.height = height

            let numberOfColumns = Math.floor(width / size * 3)
            this.initialDraw = true
            this.setState({ columns, context, size, source, numberOfColumns }, () => {
                for (let i = 0; i < numberOfColumns; i++) {
                    columns.push(largerThanAnyPageSize)
                }
                this.draw()

                let interval = setInterval(this.draw, 50 / this.props.speed)
                this.setState({ interval })

                if (this.props.fullscreen) { window.addEventListener('resize', this.updateDimensions) }
            })
            this.initialDraw = false
        })
    }

    draw() {
        let context = this.state.context
        let columns = this.state.columns
        let numberOfColumns = this.state.numberOfColumns

        // if the canvas is setup
        if (this.refs.canvas) {
            // switch to only affect the intersection of the existing canvas, and fade everything
            context.globalCompositeOperation = 'destination-out'
            context.fillStyle = `rgba(255, 255, 255, ${this.props.fadeRate})`
            context.fillRect(0, 0, this.refs.canvas.width, this.refs.canvas.width)
            // switch back to the normal mode of writing on top of the canvas
            context.globalCompositeOperation = 'source-over'

            context.fillStyle = this.props.color
            context.font = '700 ' + this.props.fontSize + 'px Courier'

            for (let whichRow = 0; whichRow < numberOfColumns; whichRow++) {
                let index = Math.floor(Math.random() * this.state.source.length)
                let character = this.state.source[index]
                let positionX = whichRow * this.state.size
                let positionY = columns[whichRow] * this.state.size
                // draw the new character
                context.fillText(character, positionX, positionY)
                // erase the old charcter
                context.globalCompositeOperation = 'destination-out'
                context.fillStyle = `rgba(255, 255, 255, 1)`
                context.fillText('0', positionX, positionY - this.props.maxLag * this.state.size)
                context.fillText('1', positionX, positionY - this.props.maxLag * this.state.size)
                context.fillStyle = this.props.color
                context.globalCompositeOperation = 'source-over'

                if (positionY >= this.refs.canvas.height && Math.random() > 1 - this.props.frequency) {
                    columns[whichRow] = 0
                }
                columns[whichRow]++
            }

            this.setState({ context, columns })
        }

    };

    updateDimensions() {
        let canvas = this.refs.canvas
        canvas.width = window.innerWidth * largerThanWindow
        canvas.height = window.innerHeight * largerThanWindow
    }

    render() {
        let style = this.props.style ? this.props.style : {}
        return React.createElement('div', {
            style: {
                ...style,
                width: this.props.fullscreen ? '200vw' : this.props.width + 'px',
                height: this.props.fullscreen ? '200vh' : this.props.height + 'px',
                overflow: 'hidden',
                zIndex: this.props.zIndex,
                backgroundColor: this.props.backgroundColor
            }
        },
            React.createElement('canvas', { ref: 'canvas' })
        )
    }
}

Matrix.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fullscreen: PropTypes.bool,
    colSize: PropTypes.number,
    fontSize: PropTypes.number,
    interval: PropTypes.number,
    color: PropTypes.string,
    frequency: PropTypes.number,
    speed: PropTypes.number,
    style: PropTypes.object,
    zIndex: PropTypes.number,
    fadeRate: PropTypes.number,
    backgroundColor: PropTypes.string
};

Matrix.defaultProps = {
    width: 1200,
    height: 2000,
    fullscreen: false,
    colSize: 30,
    fontSize: 10,
    interval: 100,
    color: '#00cc33',
    maxLag: 20, // the max length of any code-trail 
    frequency: 0.004,
    speed: 0.6,
    fadeRate: 0.2,
    backgroundColor: 'black',
    zIndex: 11
};

export default Matrix;
