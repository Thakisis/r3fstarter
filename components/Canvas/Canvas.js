import { Canvas as Canvasr3f } from "@react-three/fiber"
import { MainScene } from "@/components/Scenes"
export function Canvas(props) {
    return (
        <Canvasr3f style={{ position: "absolute", inset: 0 }}>
            <MainScene></MainScene>
        </Canvasr3f>
    )
}

