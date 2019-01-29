import { remote } from 'electron';
const { Menu } = remote;

const contextMenuTemplate=[
    { role: 'undo' },       //Undo菜单项
    { role: 'redo' },       //Redo菜单项
    { type: 'separator' },  //分隔线
    { role: 'cut' },        //Cut菜单项
    { role: 'copy' },       //Copy菜单项
    { role: 'paste' },      //Paste菜单项
    { role: 'delete' },     //Delete菜单项
    { type: 'separator' },  //分隔线
    { role: 'selectall' }   //Select All菜单项
];

const contextMenu=Menu.buildFromTemplate(contextMenuTemplate);
function handleContextMenu(e) {
    e.preventDefault();
    contextMenu.popup(remote.getCurrentWindow());
}

export {handleContextMenu}