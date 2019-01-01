function onUpdateReady() {
if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
        		window.applicationCache.swapCache();
        		location.reload();

}
}
window.applicationCache.addEventListener('updateready', onUpdateReady);
