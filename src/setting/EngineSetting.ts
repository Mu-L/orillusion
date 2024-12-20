import { ReflectionSetting } from "..";
import { GlobalIlluminationSetting } from "./GlobalIlluminationSetting";
import { LightSetting } from "./LightSetting";
import { LoaderSetting } from "./LoaderSetting";
import { MaterialSetting } from "./MaterialSetting";
import { OcclusionQuerySetting } from "./OcclusionQuerySetting";
import { PickSetting } from "./PickSetting";
import { RenderSetting } from "./RenderSetting";
import { ShadowSetting } from "./ShadowSetting";
import { SkySetting } from "./SkySetting";

export type EngineSetting = {

    /**
     * use double precision matrix
     */
    doublePrecision: boolean;

    /**
     * @internal
     */
    occlusionQuery: OcclusionQuerySetting;

    /**
     * pick mode setting
     */
    pick: PickSetting;

    /**
     * render setting
     */
    render: RenderSetting;

    /**
     * sky setting
     */
    sky: SkySetting;

    /**
     * shadow setting
     */
    shadow: ShadowSetting;

    /**
     * global illumination setting
     */
    gi: GlobalIlluminationSetting;

    /**
     * light setting
     */
    light: LightSetting;

    /**
     * @internal
     */
    material: MaterialSetting;

    /**
     * loader setting
     */
    loader: LoaderSetting;

    /**
     * reflectionSetting setting
     */
    reflectionSetting: ReflectionSetting
}