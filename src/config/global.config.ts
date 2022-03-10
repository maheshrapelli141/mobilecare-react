const devConfig = {
    baseUrl: 'https://ahidemo02.agnityhealthcare.com/commonprov/Device'
};

const prodConfig = {
    baseUrl: 'https://ahidemo02.agnityhealthcare.com/commonprov/Device'
}

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;