import React, { Component } from 'react';

const url = 'https://raw.githubusercontent.com/jshahriyarbadalov/themealsdata/master/db.json'

export default class ApiUrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Welcome",
            data: [],
        }
    }

    componentDidMount = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            this.setState({ data })
            console.log({ data })


        } catch (e) {
            // throw e
            console.log("URL is wrong")

        }
    }
}

