class PostList{
    constructor(){
        fetch('http://localhost:5000/post/')
        .then(async response => {
            const data = await response.json();
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({ totalReactPackages: data.total })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }
}

export default PostList;