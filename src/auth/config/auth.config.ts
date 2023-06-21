export default () => ({
  jwt_secret: process.env.JWT_SECRET || 'jwt_secret',
  magic_link_secret: process.env.MAGIC_LINK_SECRET || 'magic_link_secret',
});
