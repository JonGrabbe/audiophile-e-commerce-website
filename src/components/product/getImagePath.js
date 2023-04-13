export default function getImagePath(imgPath, path) {
    return path+imgPath.split('assets/')[1]
}