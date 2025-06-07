interface PenProps {
  className?: string;
}

const Pen = (props: PenProps) => {
  const { className } = props;

  return (
    <svg
      className={className}
      viewBox='0 0 28 28'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <defs>
        <image
          id='pen-image'
          width='28'
          height='28'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACh0lEQVR4nO2dPYvVQBSGY6F/wpz38E66uyrCrUQL0U78Af4HO0VsBLdTBAULsVTxo7G2s7XUfyDIqoWujaXuQiSsih9xNdzkxGTeB6bMvWcezp2cmczcFIUQQgghhBBCiP8Xdz+czO8n+FsaPhP+hsDdVJYHxo5tNtD9fIJvJ3j9ayN8i8DZsWOcPDRfbxP8e8OlsWPNQLJLdpxkyQ6ULNmBkiU7ULJkB0r+Vv6p9AsS7VuV2drP35Y5HC6r74zdtyxkE9gYu19ZyKbh09h9ykI24a/H7k8Wsgm/V+QmjubrXa9ZUfQ29/NQkQv8QVikbJqfK3KBLaIIv9rlMxJwsbtoXC5ygbtk47CyJbkeXrYk18NntiTXw8uW5Hp42ZJcdyzHOpd+Xa+ZNOx3ytwps7OBg6y4SXbIGrJkB0mW7EDJ2ctmoORsZXMEyTtNdXItycrkaUENF5I8C6hMluRZQGWyJM8CKpMleRYokwOQ5AAkOQBJDkCSA5DkACQ5AEkOQJIDWC6XeytgmYCTCbjQHJwJeZhqGW3TaqNyPyLJQRneHNtVJgdA+AdtCQiA8JfadxEAzZ/rxhcAzZ9qB1EAyfyxtmkFkIDrqpMDSMAJTUZWJJXlwX+ZlVXux2l+LRke0vCE5s9oeNFUJLuVf9nP+L6LBq70IaQyW6PhoyS3sycZXvWVfQm4oUxuE2N2rM+feir9jIaLFgjc7vNYQtpZ8cvnrxg6LBZt9nkTWywW+4aJdsIQOK0DNwEQeKTTTQEQeK+jZAE0Lxn4+9CBDZrfbB5tRcQ0S5rK4g8Vx2YCbiXgaFNnjx3n5GkqhK+ym9dnvEvmD5L7qaYaGTs2IYQQQgghhBDFanwB64Lzj63zS30AAAAASUVORK5CYII='
        />
      </defs>
      <use href='#pen-image' x='0' y='0' />
    </svg>
  );
};

export default Pen;
