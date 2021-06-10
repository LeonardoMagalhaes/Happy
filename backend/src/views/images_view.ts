import Image from '../models/Image';

export default {
    render (images: Image) {
        return {
            id: images.id,
            url: `http://192.168.0.119:3333/uploads/${images.path}`
            // TODO: Usar este caminho nas variáveis de ambiente para tratar os outros ambientes.
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};