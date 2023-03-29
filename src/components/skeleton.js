import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function BannerSkeleton(){
    return (<SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton rectangle duration={1000} style={{ width: '100vw', height: '100vh', zIndex:'-1' }}/>
            </SkeletonTheme>)
}
