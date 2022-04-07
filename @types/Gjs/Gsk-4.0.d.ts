/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gsk-4.0
 */

import type * as Gjs from './Gjs';
import type Graphene from './Graphene-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Gsk {

/**
 * The blend modes available for render nodes.
 * 
 * The implementation of each blend mode is deferred to the
 * rendering pipeline.
 * 
 * See <https://www.w3.org/TR/compositing-1/#blending> for more information
 * on blending and blend modes.
 */
enum BlendMode {
    /**
     * The default blend mode, which specifies no blending
     */
    DEFAULT,
    /**
     * The source color is multiplied by the destination
     *   and replaces the destination
     */
    MULTIPLY,
    /**
     * Multiplies the complements of the destination and source
     *   color values, then complements the result.
     */
    SCREEN,
    /**
     * Multiplies or screens the colors, depending on the
     *   destination color value. This is the inverse of hard-list
     */
    OVERLAY,
    /**
     * Selects the darker of the destination and source colors
     */
    DARKEN,
    /**
     * Selects the lighter of the destination and source colors
     */
    LIGHTEN,
    /**
     * Brightens the destination color to reflect the source color
     */
    COLOR_DODGE,
    /**
     * Darkens the destination color to reflect the source color
     */
    COLOR_BURN,
    /**
     * Multiplies or screens the colors, depending on the source color value
     */
    HARD_LIGHT,
    /**
     * Darkens or lightens the colors, depending on the source color value
     */
    SOFT_LIGHT,
    /**
     * Subtracts the darker of the two constituent colors from the lighter color
     */
    DIFFERENCE,
    /**
     * Produces an effect similar to that of the difference mode but lower in contrast
     */
    EXCLUSION,
    /**
     * Creates a color with the hue and saturation of the source color and the luminosity of the destination color
     */
    COLOR,
    /**
     * Creates a color with the hue of the source color and the saturation and luminosity of the destination color
     */
    HUE,
    /**
     * Creates a color with the saturation of the source color and the hue and luminosity of the destination color
     */
    SATURATION,
    /**
     * Creates a color with the luminosity of the source color and the hue and saturation of the destination color
     */
    LUMINOSITY,
}
/**
 * The corner indices used by `GskRoundedRect`.
 */
enum Corner {
    /**
     * The top left corner
     */
    TOP_LEFT,
    /**
     * The top right corner
     */
    TOP_RIGHT,
    /**
     * The bottom right corner
     */
    BOTTOM_RIGHT,
    /**
     * The bottom left corner
     */
    BOTTOM_LEFT,
}
/**
 * This defines the types of the uniforms that `GskGLShaders`
 * declare.
 * 
 * It defines both what the type is called in the GLSL shader
 * code, and what the corresponding C type is on the Gtk side.
 */
enum GLUniformType {
    /**
     * No type, used for uninitialized or unspecified values.
     */
    NONE,
    /**
     * A float uniform
     */
    FLOAT,
    /**
     * A GLSL int / gint32 uniform
     */
    INT,
    /**
     * A GLSL uint / guint32 uniform
     */
    UINT,
    /**
     * A GLSL bool / gboolean uniform
     */
    BOOL,
    /**
     * A GLSL vec2 / graphene_vec2_t uniform
     */
    VEC2,
    /**
     * A GLSL vec3 / graphene_vec3_t uniform
     */
    VEC3,
    /**
     * A GLSL vec4 / graphene_vec4_t uniform
     */
    VEC4,
}
/**
 * The type of a node determines what the node is rendering.
 */
enum RenderNodeType {
    /**
     * Error type. No node will ever have this type.
     */
    NOT_A_RENDER_NODE,
    /**
     * A node containing a stack of children
     */
    CONTAINER_NODE,
    /**
     * A node drawing a `cairo_surface_t`
     */
    CAIRO_NODE,
    /**
     * A node drawing a single color rectangle
     */
    COLOR_NODE,
    /**
     * A node drawing a linear gradient
     */
    LINEAR_GRADIENT_NODE,
    /**
     * A node drawing a repeating linear gradient
     */
    REPEATING_LINEAR_GRADIENT_NODE,
    /**
     * A node drawing a radial gradient
     */
    RADIAL_GRADIENT_NODE,
    /**
     * A node drawing a repeating radial gradient
     */
    REPEATING_RADIAL_GRADIENT_NODE,
    /**
     * A node drawing a conic gradient
     */
    CONIC_GRADIENT_NODE,
    /**
     * A node stroking a border around an area
     */
    BORDER_NODE,
    /**
     * A node drawing a `GdkTexture`
     */
    TEXTURE_NODE,
    /**
     * A node drawing an inset shadow
     */
    INSET_SHADOW_NODE,
    /**
     * A node drawing an outset shadow
     */
    OUTSET_SHADOW_NODE,
    /**
     * A node that renders its child after applying a matrix transform
     */
    TRANSFORM_NODE,
    /**
     * A node that changes the opacity of its child
     */
    OPACITY_NODE,
    /**
     * A node that applies a color matrix to every pixel
     */
    COLOR_MATRIX_NODE,
    /**
     * A node that repeats the child's contents
     */
    REPEAT_NODE,
    /**
     * A node that clips its child to a rectangular area
     */
    CLIP_NODE,
    /**
     * A node that clips its child to a rounded rectangle
     */
    ROUNDED_CLIP_NODE,
    /**
     * A node that draws a shadow below its child
     */
    SHADOW_NODE,
    /**
     * A node that blends two children together
     */
    BLEND_NODE,
    /**
     * A node that cross-fades between two children
     */
    CROSS_FADE_NODE,
    /**
     * A node containing a glyph string
     */
    TEXT_NODE,
    /**
     * A node that applies a blur
     */
    BLUR_NODE,
    /**
     * Debug information that does not affect the rendering
     */
    DEBUG_NODE,
    /**
     * A node that uses OpenGL fragment shaders to render
     */
    GL_SHADER_NODE,
}
/**
 * The filters used when scaling texture data.
 * 
 * The actual implementation of each filter is deferred to the
 * rendering pipeline.
 */
enum ScalingFilter {
    /**
     * linear interpolation filter
     */
    LINEAR,
    /**
     * nearest neighbor interpolation filter
     */
    NEAREST,
    /**
     * linear interpolation along each axis,
     *   plus mipmap generation, with linear interpolation along the mipmap
     *   levels
     */
    TRILINEAR,
}
/**
 * Errors that can happen during (de)serialization.
 */
enum SerializationError {
    /**
     * The format can not be identified
     */
    UNSUPPORTED_FORMAT,
    /**
     * The version of the data is not
     *   understood
     */
    UNSUPPORTED_VERSION,
    /**
     * The given data may not exist in
     *   a proper serialization
     */
    INVALID_DATA,
}
/**
 * The categories of matrices relevant for GSK and GTK.
 * 
 * Note that any category includes matrices of all later categories.
 * So if you want to for example check if a matrix is a 2D matrix,
 * `category >= GSK_TRANSFORM_CATEGORY_2D` is the way to do this.
 * 
 * Also keep in mind that rounding errors may cause matrices to not
 * conform to their categories. Otherwise, matrix operations done via
 * multiplication will not worsen categories. So for the matrix
 * multiplication `C = A * B`, `category(C) = MIN (category(A), category(B))`.
 */
enum TransformCategory {
    /**
     * The category of the matrix has not been
     *   determined.
     */
    UNKNOWN,
    /**
     * Analyzing the matrix concluded that it does
     *   not fit in any other category.
     */
    ANY,
    /**
     * The matrix is a 3D matrix. This means that
     *   the w column (the last column) has the values (0, 0, 0, 1).
     */
    TODO_3D,
    /**
     * The matrix is a 2D matrix. This is equivalent
     *   to graphene_matrix_is_2d() returning %TRUE. In particular, this
     *   means that Cairo can deal with the matrix.
     */
    TODO_2D,
    /**
     * The matrix is a combination of 2D scale
     *   and 2D translation operations. In particular, this means that any
     *   rectangle can be transformed exactly using this matrix.
     */
    TODO_2D_AFFINE,
    /**
     * The matrix is a 2D translation.
     */
    TODO_2D_TRANSLATE,
    /**
     * The matrix is the identity matrix.
     */
    IDENTITY,
}
function serialization_error_quark(): GLib.Quark
function transform_parse(string: string): [ /* returnType */ boolean, /* out_transform */ Transform ]
function value_dup_render_node(value: any): RenderNode | null
function value_get_render_node(value: any): RenderNode | null
function value_set_render_node(value: any, node: RenderNode): void
function value_take_render_node(value: any, node: RenderNode | null): void
/**
 * Type of callback that is called when an error occurs
 * during node deserialization.
 * @callback 
 */
interface ParseErrorFunc {
    (start: ParseLocation, end: ParseLocation, error: GLib.Error): void
}
/**
 * A render node applying a blending function between its two child nodes.
 */
class BlendNode {
    /* Owm methods of Gsk-4.0.Gsk.BlendNode */
    /**
     * Retrieves the blend mode used by `node`.
     */
    get_blend_mode(): BlendMode
    /**
     * Retrieves the bottom `GskRenderNode` child of the `node`.
     */
    get_bottom_child(): RenderNode
    /**
     * Retrieves the top `GskRenderNode` child of the `node`.
     */
    get_top_child(): RenderNode
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode
    constructor(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode)
    /* Static methods and pseudo-constructors */
    static new(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode
}
/**
 * A render node applying a blur effect to its single child.
 */
class BlurNode {
    /* Owm methods of Gsk-4.0.Gsk.BlurNode */
    /**
     * Retrieves the child `GskRenderNode` of the blur `node`.
     */
    get_child(): RenderNode
    /**
     * Retrieves the blur radius of the `node`.
     */
    get_radius(): number
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, radius: number): BlurNode
    constructor(child: RenderNode, radius: number)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, radius: number): BlurNode
}
/**
 * A render node for a border.
 */
class BorderNode {
    /* Owm methods of Gsk-4.0.Gsk.BorderNode */
    /**
     * Retrieves the colors of the border.
     */
    get_colors(): Gdk.RGBA
    /**
     * Retrieves the outline of the border.
     */
    get_outline(): RoundedRect
    /**
     * Retrieves the stroke widths of the border.
     */
    get_widths(): number[]
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode
    constructor(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[])
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode
}
interface BroadwayRenderer_ConstructProps extends Renderer_ConstructProps {
}
class BroadwayRenderer {
    /* Extended properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    get_surface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    is_realized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     * @param surface the `GdkSurface` renderer will be used on
     */
    realize(surface: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * @param root a `GskRenderNode`
     * @param region the `cairo_region_t` that must be redrawn or %NULL   for the whole window
     */
    render(root: RenderNode, region: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     * @param root a `GskRenderNode`
     * @param viewport the section to draw or %NULL to use `root'`s bounds
     */
    render_texture(root: RenderNode, viewport: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BroadwayRenderer_ConstructProps)
    _init (config?: BroadwayRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BroadwayRenderer
    static $gtype: GObject.GType<BroadwayRenderer>
}
/**
 * A render node for a Cairo surface.
 */
class CairoNode {
    /* Owm methods of Gsk-4.0.Gsk.CairoNode */
    /**
     * Creates a Cairo context for drawing using the surface associated
     * to the render node.
     * 
     * If no surface exists yet, a surface will be created optimized for
     * rendering to `renderer`.
     */
    get_draw_context(): cairo.Context
    /**
     * Retrieves the Cairo surface used by the render node.
     */
    get_surface(): cairo.Surface
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect): CairoNode
    constructor(bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect): CairoNode
}
interface CairoRenderer_ConstructProps extends Renderer_ConstructProps {
}
/**
 * A GSK renderer that is using cairo.
 * 
 * Since it is using cairo, this renderer cannot support
 * 3D transformations.
 */
class CairoRenderer {
    /* Extended properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    get_surface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    is_realized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     * @param surface the `GdkSurface` renderer will be used on
     */
    realize(surface: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * @param root a `GskRenderNode`
     * @param region the `cairo_region_t` that must be redrawn or %NULL   for the whole window
     */
    render(root: RenderNode, region: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     * @param root a `GskRenderNode`
     * @param viewport the section to draw or %NULL to use `root'`s bounds
     */
    render_texture(root: RenderNode, viewport: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CairoRenderer_ConstructProps)
    _init (config?: CairoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CairoRenderer
    static $gtype: GObject.GType<CairoRenderer>
}
/**
 * A render node applying a rectangular clip to its single child node.
 */
class ClipNode {
    /* Owm methods of Gsk-4.0.Gsk.ClipNode */
    /**
     * Gets the child node that is getting clipped by the given `node`.
     */
    get_child(): RenderNode
    /**
     * Retrieves the clip rectangle for `node`.
     */
    get_clip(): Graphene.Rect
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
    constructor(child: RenderNode, clip: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
}
/**
 * A render node controlling the color matrix of its single child node.
 */
class ColorMatrixNode {
    /* Owm methods of Gsk-4.0.Gsk.ColorMatrixNode */
    /**
     * Gets the child node that is getting its colors modified by the given `node`.
     */
    get_child(): RenderNode
    /**
     * Retrieves the color matrix used by the `node`.
     */
    get_color_matrix(): Graphene.Matrix
    /**
     * Retrieves the color offset used by the `node`.
     */
    get_color_offset(): Graphene.Vec4
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode
    constructor(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode
}
/**
 * A render node for a solid color.
 */
class ColorNode {
    /* Owm methods of Gsk-4.0.Gsk.ColorNode */
    /**
     * Retrieves the color of the given `node`.
     */
    get_color(): Gdk.RGBA
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
    constructor(rgba: Gdk.RGBA, bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
}
/**
 * A render node for a conic gradient.
 */
class ConicGradientNode {
    /* Owm methods of Gsk-4.0.Gsk.ConicGradientNode */
    /**
     * Retrieves the angle for the gradient in radians, normalized in [0, 2 * PI].
     * 
     * The angle is starting at the top and going clockwise, as expressed
     * in the css specification:
     * 
     *     angle = 90 - gsk_conic_gradient_node_get_rotation()
     */
    get_angle(): number
    /**
     * Retrieves the center pointer for the gradient.
     */
    get_center(): Graphene.Point
    /**
     * Retrieves the color stops in the gradient.
     */
    get_color_stops(): ColorStop[]
    /**
     * Retrieves the number of color stops in the gradient.
     */
    get_n_color_stops(): number
    /**
     * Retrieves the rotation for the gradient in degrees.
     */
    get_rotation(): number
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[]): ConicGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[]): ConicGradientNode
}
/**
 * A render node that can contain other render nodes.
 */
class ContainerNode {
    /* Owm methods of Gsk-4.0.Gsk.ContainerNode */
    /**
     * Gets one of the children of `container`.
     * @param idx the position of the child to get
     */
    get_child(idx: number): RenderNode
    /**
     * Retrieves the number of direct children of `node`.
     */
    get_n_children(): number
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(children: RenderNode[]): ContainerNode
    constructor(children: RenderNode[])
    /* Static methods and pseudo-constructors */
    static new(children: RenderNode[]): ContainerNode
}
/**
 * A render node cross fading between two child nodes.
 */
class CrossFadeNode {
    /* Owm methods of Gsk-4.0.Gsk.CrossFadeNode */
    /**
     * Retrieves the child `GskRenderNode` at the end of the cross-fade.
     */
    get_end_child(): RenderNode
    /**
     * Retrieves the progress value of the cross fade.
     */
    get_progress(): number
    /**
     * Retrieves the child `GskRenderNode` at the beginning of the cross-fade.
     */
    get_start_child(): RenderNode
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
    constructor(start: RenderNode, end: RenderNode, progress: number)
    /* Static methods and pseudo-constructors */
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
}
/**
 * A render node that emits a debugging message when drawing its
 * child node.
 */
class DebugNode {
    /* Owm methods of Gsk-4.0.Gsk.DebugNode */
    /**
     * Gets the child node that is getting drawn by the given `node`.
     */
    get_child(): RenderNode
    /**
     * Gets the debug message that was set on this node
     */
    get_message(): string
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, message: string): DebugNode
    constructor(child: RenderNode, message: string)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, message: string): DebugNode
}
interface GLRenderer_ConstructProps extends Renderer_ConstructProps {
}
class GLRenderer {
    /* Extended properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    get_surface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    is_realized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     * @param surface the `GdkSurface` renderer will be used on
     */
    realize(surface: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * @param root a `GskRenderNode`
     * @param region the `cairo_region_t` that must be redrawn or %NULL   for the whole window
     */
    render(root: RenderNode, region: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     * @param root a `GskRenderNode`
     * @param viewport the section to draw or %NULL to use `root'`s bounds
     */
    render_texture(root: RenderNode, viewport: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLRenderer_ConstructProps)
    _init (config?: GLRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLRenderer
    static $gtype: GObject.GType<GLRenderer>
}
interface GLShader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gsk-4.0.Gsk.GLShader */
    /**
     * Resource containing the source code for the shader.
     * 
     * If the shader source is not coming from a resource, this
     * will be %NULL.
     */
    resource?: string | null
    source?: GLib.Bytes | null
}
/**
 * A `GskGLShader` is a snippet of GLSL that is meant to run in the
 * fragment shader of the rendering pipeline.
 * 
 * A fragment shader gets the coordinates being rendered as input and
 * produces the pixel values for that particular pixel. Additionally,
 * the shader can declare a set of other input arguments, called
 * uniforms (as they are uniform over all the calls to your shader in
 * each instance of use). A shader can also receive up to 4
 * textures that it can use as input when producing the pixel data.
 * 
 * `GskGLShader` is usually used with gtk_snapshot_push_gl_shader()
 * to produce a [class`Gsk`.GLShaderNode] in the rendering hierarchy,
 * and then its input textures are constructed by rendering the child
 * nodes to textures before rendering the shader node itself. (You can
 * pass texture nodes as children if you want to directly use a texture
 * as input).
 * 
 * The actual shader code is GLSL code that gets combined with
 * some other code into the fragment shader. Since the exact
 * capabilities of the GPU driver differs between different OpenGL
 * drivers and hardware, GTK adds some defines that you can use
 * to ensure your GLSL code runs on as many drivers as it can.
 * 
 * If the OpenGL driver is GLES, then the shader language version
 * is set to 100, and GSK_GLES will be defined in the shader.
 * 
 * Otherwise, if the OpenGL driver does not support the 3.2 core profile,
 * then the shader will run with language version 110 for GL2 and 130 for GL3,
 * and GSK_LEGACY will be defined in the shader.
 * 
 * If the OpenGL driver supports the 3.2 code profile, it will be used,
 * the shader language version is set to 150, and GSK_GL3 will be defined
 * in the shader.
 * 
 * The main function the shader must implement is:
 * 
 * ```glsl
 *  void mainImage(out vec4 fragColor,
 *                 in vec2 fragCoord,
 *                 in vec2 resolution,
 *                 in vec2 uv)
 * ```
 * 
 * Where the input `fragCoord` is the coordinate of the pixel we're
 * currently rendering, relative to the boundary rectangle that was
 * specified in the `GskGLShaderNode`, and `resolution` is the width and
 * height of that rectangle. This is in the typical GTK coordinate
 * system with the origin in the top left. `uv` contains the u and v
 * coordinates that can be used to index a texture at the
 * corresponding point. These coordinates are in the [0..1]x[0..1]
 * region, with 0, 0 being in the lower left corder (which is typical
 * for OpenGL).
 * 
 * The output `fragColor` should be a RGBA color (with
 * premultiplied alpha) that will be used as the output for the
 * specified pixel location. Note that this output will be
 * automatically clipped to the clip region of the glshader node.
 * 
 * In addition to the function arguments the shader can define
 * up to 4 uniforms for textures which must be called u_textureN
 * (i.e. u_texture1 to u_texture4) as well as any custom uniforms
 * you want of types int, uint, bool, float, vec2, vec3 or vec4.
 * 
 * All textures sources contain premultiplied alpha colors, but if some
 * there are outer sources of colors there is a gsk_premultiply() helper
 * to compute premultiplication when needed.
 * 
 * Note that GTK parses the uniform declarations, so each uniform has to
 * be on a line by itself with no other code, like so:
 * 
 * ```glsl
 * uniform float u_time;
 * uniform vec3 u_color;
 * uniform sampler2D u_texture1;
 * uniform sampler2D u_texture2;
 * ```
 * 
 * GTK uses the "gsk" namespace in the symbols it uses in the
 * shader, so your code should not use any symbols with the prefix gsk
 * or GSK. There are some helper functions declared that you can use:
 * 
 * ```glsl
 * vec4 GskTexture(sampler2D sampler, vec2 texCoords);
 * ```
 * 
 * This samples a texture (e.g. u_texture1) at the specified
 * coordinates, and containes some helper ifdefs to ensure that
 * it works on all OpenGL versions.
 * 
 * You can compile the shader yourself using [method`Gsk`.GLShader.compile],
 * otherwise the GSK renderer will do it when it handling the glshader
 * node. If errors occurs, the returned `error` will include the glsl
 * sources, so you can see what GSK was passing to the compiler. You
 * can also set GSK_DEBUG=shaders in the environment to see the sources
 * and other relevant information about all shaders that GSK is handling.
 * 
 * # An example shader
 * 
 * ```glsl
 * uniform float position;
 * uniform sampler2D u_texture1;
 * uniform sampler2D u_texture2;
 * 
 * void mainImage(out vec4 fragColor,
 *                in vec2 fragCoord,
 *                in vec2 resolution,
 *                in vec2 uv) {
 *   vec4 source1 = GskTexture(u_texture1, uv);
 *   vec4 source2 = GskTexture(u_texture2, uv);
 * 
 *   fragColor = position * source1 + (1.0 - position) * source2;
 * }
 * ```
 */
class GLShader {
    /* Own properties of Gsk-4.0.Gsk.GLShader */
    /**
     * Resource containing the source code for the shader.
     * 
     * If the shader source is not coming from a resource, this
     * will be %NULL.
     */
    readonly resource: string
    readonly source: GLib.Bytes
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Gsk-4.0.Gsk.GLShader */
    /**
     * Tries to compile the `shader` for the given `renderer`.
     * 
     * If there is a problem, this function returns %FALSE and reports
     * an error. You should use this function before relying on the shader
     * for rendering and use a fallback with a simpler shader or without
     * shaders if it fails.
     * 
     * Note that this will modify the rendering state (for example
     * change the current GL context) and requires the renderer to be
     * set up. This means that the widget has to be realized. Commonly you
     * want to call this from the realize signal of a widget, or during
     * widget snapshot.
     * @param renderer a `GskRenderer`
     */
    compile(renderer: Renderer): boolean
    /**
     * Looks for a uniform by the name `name,` and returns the index
     * of the uniform, or -1 if it was not found.
     * @param name uniform name
     */
    find_uniform_by_name(name: string): number
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of bool type.
     * @param args uniform arguments
     * @param idx index of the uniform
     */
    get_arg_bool(args: GLib.Bytes, idx: number): boolean
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of float type.
     * @param args uniform arguments
     * @param idx index of the uniform
     */
    get_arg_float(args: GLib.Bytes, idx: number): number
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of int type.
     * @param args uniform arguments
     * @param idx index of the uniform
     */
    get_arg_int(args: GLib.Bytes, idx: number): number
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of uint type.
     * @param args uniform arguments
     * @param idx index of the uniform
     */
    get_arg_uint(args: GLib.Bytes, idx: number): number
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of vec2 type.
     * @param args uniform arguments
     * @param idx index of the uniform
     * @param out_value location to store the uniform value in
     */
    get_arg_vec2(args: GLib.Bytes, idx: number, out_value: Graphene.Vec2): void
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of vec3 type.
     * @param args uniform arguments
     * @param idx index of the uniform
     * @param out_value location to store the uniform value in
     */
    get_arg_vec3(args: GLib.Bytes, idx: number, out_value: Graphene.Vec3): void
    /**
     * Gets the value of the uniform `idx` in the `args` block.
     * 
     * The uniform must be of vec4 type.
     * @param args uniform arguments
     * @param idx index of the uniform
     * @param out_value location to store set the uniform value in
     */
    get_arg_vec4(args: GLib.Bytes, idx: number, out_value: Graphene.Vec4): void
    /**
     * Get the size of the data block used to specify arguments for this shader.
     */
    get_args_size(): number
    /**
     * Returns the number of textures that the shader requires.
     * 
     * This can be used to check that the a passed shader works
     * in your usecase. It is determined by looking at the highest
     * u_textureN value that the shader defines.
     */
    get_n_textures(): number
    /**
     * Get the number of declared uniforms for this shader.
     */
    get_n_uniforms(): number
    /**
     * Gets the resource path for the GLSL sourcecode being used
     * to render this shader.
     */
    get_resource(): string | null
    /**
     * Gets the GLSL sourcecode being used to render this shader.
     */
    get_source(): GLib.Bytes
    /**
     * Get the name of the declared uniform for this shader at index `idx`.
     * @param idx index of the uniform
     */
    get_uniform_name(idx: number): string
    /**
     * Get the offset into the data block where data for this uniforms is stored.
     * @param idx index of the uniform
     */
    get_uniform_offset(idx: number): number
    /**
     * Get the type of the declared uniform for this shader at index `idx`.
     * @param idx index of the uniform
     */
    get_uniform_type(idx: number): GLUniformType
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::resource", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLShader_ConstructProps)
    _init (config?: GLShader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_bytes(sourcecode: GLib.Bytes): GLShader
    static new_from_resource(resource_path: string): GLShader
    static $gtype: GObject.GType<GLShader>
}
/**
 * A render node using a GL shader when drawing its children nodes.
 */
class GLShaderNode {
    /* Owm methods of Gsk-4.0.Gsk.GLShaderNode */
    /**
     * Gets args for the node.
     */
    get_args(): GLib.Bytes
    /**
     * Gets one of the children.
     * @param idx the position of the child to get
     */
    get_child(idx: number): RenderNode
    /**
     * Returns the number of children
     */
    get_n_children(): number
    /**
     * Gets shader code for the node.
     */
    get_shader(): GLShader
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(shader: GLShader, bounds: Graphene.Rect, args: GLib.Bytes, children: RenderNode[] | null): GLShaderNode
    constructor(shader: GLShader, bounds: Graphene.Rect, args: GLib.Bytes, children: RenderNode[] | null)
    /* Static methods and pseudo-constructors */
    static new(shader: GLShader, bounds: Graphene.Rect, args: GLib.Bytes, children: RenderNode[] | null): GLShaderNode
}
/**
 * A render node for an inset shadow.
 */
class InsetShadowNode {
    /* Owm methods of Gsk-4.0.Gsk.InsetShadowNode */
    /**
     * Retrieves the blur radius to apply to the shadow.
     */
    get_blur_radius(): number
    /**
     * Retrieves the color of the inset shadow.
     */
    get_color(): Gdk.RGBA
    /**
     * Retrieves the horizontal offset of the inset shadow.
     */
    get_dx(): number
    /**
     * Retrieves the vertical offset of the inset shadow.
     */
    get_dy(): number
    /**
     * Retrieves the outline rectangle of the inset shadow.
     */
    get_outline(): RoundedRect
    /**
     * Retrieves how much the shadow spreads inwards.
     */
    get_spread(): number
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): InsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number)
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): InsetShadowNode
}
/**
 * A render node for a linear gradient.
 */
class LinearGradientNode {
    /* Owm methods of Gsk-4.0.Gsk.LinearGradientNode */
    /**
     * Retrieves the color stops in the gradient.
     */
    get_color_stops(): ColorStop[]
    /**
     * Retrieves the final point of the linear gradient.
     */
    get_end(): Graphene.Point
    /**
     * Retrieves the number of color stops in the gradient.
     */
    get_n_color_stops(): number
    /**
     * Retrieves the initial point of the linear gradient.
     */
    get_start(): Graphene.Point
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): LinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): LinearGradientNode
}
interface NglRenderer_ConstructProps extends Renderer_ConstructProps {
}
class NglRenderer {
    /* Extended properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    get_surface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    is_realized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     * @param surface the `GdkSurface` renderer will be used on
     */
    realize(surface: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * @param root a `GskRenderNode`
     * @param region the `cairo_region_t` that must be redrawn or %NULL   for the whole window
     */
    render(root: RenderNode, region: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     * @param root a `GskRenderNode`
     * @param viewport the section to draw or %NULL to use `root'`s bounds
     */
    render_texture(root: RenderNode, viewport: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NglRenderer_ConstructProps)
    _init (config?: NglRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NglRenderer
    static $gtype: GObject.GType<NglRenderer>
}
/**
 * A render node controlling the opacity of its single child node.
 */
class OpacityNode {
    /* Owm methods of Gsk-4.0.Gsk.OpacityNode */
    /**
     * Gets the child node that is getting opacityed by the given `node`.
     */
    get_child(): RenderNode
    /**
     * Gets the transparency factor for an opacity node.
     */
    get_opacity(): number
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, opacity: number): OpacityNode
    constructor(child: RenderNode, opacity: number)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, opacity: number): OpacityNode
}
/**
 * A render node for an outset shadow.
 */
class OutsetShadowNode {
    /* Owm methods of Gsk-4.0.Gsk.OutsetShadowNode */
    /**
     * Retrieves the blur radius of the shadow.
     */
    get_blur_radius(): number
    /**
     * Retrieves the color of the outset shadow.
     */
    get_color(): Gdk.RGBA
    /**
     * Retrieves the horizontal offset of the outset shadow.
     */
    get_dx(): number
    /**
     * Retrieves the vertical offset of the outset shadow.
     */
    get_dy(): number
    /**
     * Retrieves the outline rectangle of the outset shadow.
     */
    get_outline(): RoundedRect
    /**
     * Retrieves how much the shadow spreads outwards.
     */
    get_spread(): number
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): OutsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number)
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): OutsetShadowNode
}
/**
 * A render node for a radial gradient.
 */
class RadialGradientNode {
    /* Owm methods of Gsk-4.0.Gsk.RadialGradientNode */
    /**
     * Retrieves the center pointer for the gradient.
     */
    get_center(): Graphene.Point
    /**
     * Retrieves the color stops in the gradient.
     */
    get_color_stops(): ColorStop[]
    /**
     * Retrieves the end value for the gradient.
     */
    get_end(): number
    /**
     * Retrieves the horizonal radius for the gradient.
     */
    get_hradius(): number
    /**
     * Retrieves the number of color stops in the gradient.
     */
    get_n_color_stops(): number
    /**
     * Retrieves the start value for the gradient.
     */
    get_start(): number
    /**
     * Retrieves the vertical radius for the gradient.
     */
    get_vradius(): number
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RadialGradientNode
}
/**
 * `GskRenderNode` is the basic block in a scene graph to be
 * rendered using [class`Gsk`.Renderer].
 * 
 * Each node has a parent, except the top-level node; each node may have
 * children nodes.
 * 
 * Each node has an associated drawing surface, which has the size of
 * the rectangle set when creating it.
 * 
 * Render nodes are meant to be transient; once they have been associated
 * to a [class`Gsk`.Renderer] it's safe to release any reference you have on
 * them. All [class`Gsk`.RenderNode]s are immutable, you can only specify their
 * properties during construction.
 */
class RenderNode {
    /* Owm methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Loads data previously created via [method`Gsk`.RenderNode.serialize].
     * 
     * For a discussion of the supported format, see that function.
     * @param bytes the bytes containing the data
     */
    static deserialize(bytes: GLib.Bytes): RenderNode | null
}
interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * `GskRenderer` is a class that renders a scene graph defined via a
 * tree of [class`Gsk`.RenderNode] instances.
 * 
 * Typically you will use a `GskRenderer` instance to repeatedly call
 * [method`Gsk`.Renderer.render] to update the contents of its associated
 * [class`Gdk`.Surface].
 * 
 * It is necessary to realize a `GskRenderer` instance using
 * [method`Gsk`.Renderer.realize] before calling [method`Gsk`.Renderer.render],
 * in order to create the appropriate windowing system resources needed
 * to render the scene.
 */
class Renderer {
    /* Own properties of Gsk-4.0.Gsk.Renderer */
    /**
     * Whether the renderer has been associated with a surface or draw context.
     */
    readonly realized: boolean
    /**
     * The surface associated with renderer.
     */
    readonly surface: Gdk.Surface
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Gsk-4.0.Gsk.Renderer */
    /**
     * Retrieves the `GdkSurface` set using gsk_enderer_realize().
     * 
     * If the renderer has not been realized yet, %NULL will be returned.
     */
    get_surface(): Gdk.Surface | null
    /**
     * Checks whether the `renderer` is realized or not.
     */
    is_realized(): boolean
    /**
     * Creates the resources needed by the `renderer` to render the scene
     * graph.
     * 
     * Since GTK 4.6, the surface may be `NULL`, which allows using
     * renderers without having to create a surface.
     * 
     * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
     * destroying the renderer.
     * @param surface the `GdkSurface` renderer will be used on
     */
    realize(surface: Gdk.Surface | null): boolean
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances
     * to the renderer's surface,  ensuring that the given `region` gets redrawn.
     * 
     * If the renderer has no associated surface, this function does nothing.
     * 
     * Renderers must ensure that changes of the contents given by the `root`
     * node as well as the area given by `region` are redrawn. They are however
     * free to not redraw any pixel outside of `region` if they can guarantee that
     * it didn't change.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * @param root a `GskRenderNode`
     * @param region the `cairo_region_t` that must be redrawn or %NULL   for the whole window
     */
    render(root: RenderNode, region: cairo.Region | null): void
    /**
     * Renders the scene graph, described by a tree of `GskRenderNode` instances,
     * to a `GdkTexture`.
     * 
     * The `renderer` will acquire a reference on the `GskRenderNode` tree while
     * the rendering is in progress.
     * 
     * If you want to apply any transformations to `root,` you should put it into a
     * transform node and pass that node instead.
     * @param root a `GskRenderNode`
     * @param viewport the section to draw or %NULL to use `root'`s bounds
     */
    render_texture(root: RenderNode, viewport: Graphene.Rect | null): Gdk.Texture
    /**
     * Releases all the resources created by gsk_renderer_realize().
     */
    unrealize(): void
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_surface(surface: Gdk.Surface): Renderer
    static $gtype: GObject.GType<Renderer>
}
/**
 * A render node repeating its single child node.
 */
class RepeatNode {
    /* Owm methods of Gsk-4.0.Gsk.RepeatNode */
    /**
     * Retrieves the child of `node`.
     */
    get_child(): RenderNode
    /**
     * Retrieves the bounding rectangle of the child of `node`.
     */
    get_child_bounds(): Graphene.Rect
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, child: RenderNode, child_bounds: Graphene.Rect | null): RepeatNode
    constructor(bounds: Graphene.Rect, child: RenderNode, child_bounds: Graphene.Rect | null)
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, child: RenderNode, child_bounds: Graphene.Rect | null): RepeatNode
}
/**
 * A render node for a repeating linear gradient.
 */
class RepeatingLinearGradientNode {
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): RepeatingLinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): RepeatingLinearGradientNode
}
/**
 * A render node for a repeating radial gradient.
 */
class RepeatingRadialGradientNode {
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RepeatingRadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RepeatingRadialGradientNode
}
/**
 * A render node applying a rounded rectangle clip to its single child.
 */
class RoundedClipNode {
    /* Owm methods of Gsk-4.0.Gsk.RoundedClipNode */
    /**
     * Gets the child node that is getting clipped by the given `node`.
     */
    get_child(): RenderNode
    /**
     * Retrieves the rounded rectangle used to clip the contents of the `node`.
     */
    get_clip(): RoundedRect
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
    constructor(child: RenderNode, clip: RoundedRect)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
}
/**
 * A render node drawing one or more shadows behind its single child node.
 */
class ShadowNode {
    /* Owm methods of Gsk-4.0.Gsk.ShadowNode */
    /**
     * Retrieves the child `GskRenderNode` of the shadow `node`.
     */
    get_child(): RenderNode
    /**
     * Retrieves the number of shadows in the `node`.
     */
    get_n_shadows(): number
    /**
     * Retrieves the shadow data at the given index `i`.
     * @param i the given index
     */
    get_shadow(i: number): Shadow
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
    constructor(child: RenderNode, shadows: Shadow[])
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
}
/**
 * A render node drawing a set of glyphs.
 */
class TextNode {
    /* Owm methods of Gsk-4.0.Gsk.TextNode */
    /**
     * Retrieves the color used by the text `node`.
     */
    get_color(): Gdk.RGBA
    /**
     * Returns the font used by the text `node`.
     */
    get_font(): Pango.Font
    /**
     * Retrieves the glyph information in the `node`.
     */
    get_glyphs(): Pango.GlyphInfo[]
    /**
     * Retrieves the number of glyphs in the text node.
     */
    get_num_glyphs(): number
    /**
     * Retrieves the offset applied to the text.
     */
    get_offset(): Graphene.Point
    /**
     * Checks whether the text `node` has color glyphs.
     */
    has_color_glyphs(): boolean
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode
    constructor(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point)
    /* Static methods and pseudo-constructors */
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode
}
/**
 * A render node for a `GdkTexture`.
 */
class TextureNode {
    /* Owm methods of Gsk-4.0.Gsk.TextureNode */
    /**
     * Retrieves the `GdkTexture` used when creating this `GskRenderNode`.
     */
    get_texture(): Gdk.Texture
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
    constructor(texture: Gdk.Texture, bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
}
/**
 * A render node applying a `GskTransform` to its single child node.
 */
class TransformNode {
    /* Owm methods of Gsk-4.0.Gsk.TransformNode */
    /**
     * Gets the child node that is getting transformed by the given `node`.
     */
    get_child(): RenderNode
    /**
     * Retrieves the `GskTransform` used by the `node`.
     */
    get_transform(): Transform
    /* Extended methods of Gsk-4.0.Gsk.RenderNode */
    /**
     * Draw the contents of `node` to the given cairo context.
     * 
     * Typically, you'll use this function to implement fallback rendering
     * of `GskRenderNode`s on an intermediate Cairo context, instead of using
     * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
     * 
     * For advanced nodes that cannot be supported using Cairo, in particular
     * for nodes doing 3D operations, this function may fail.
     * @param cr cairo context to draw to
     */
    draw(cr: cairo.Context): void
    /**
     * Retrieves the boundaries of the `node`.
     * 
     * The node will not draw outside of its boundaries.
     */
    get_bounds(): /* bounds */ Graphene.Rect
    /**
     * Returns the type of the `node`.
     */
    get_node_type(): RenderNodeType
    /**
     * Acquires a reference on the given `GskRenderNode`.
     */
    ref(): RenderNode
    /**
     * Serializes the `node` for later deserialization via
     * gsk_render_node_deserialize(). No guarantees are made about the format
     * used other than that the same version of GTK will be able to deserialize
     * the result of a call to gsk_render_node_serialize() and
     * gsk_render_node_deserialize() will correctly reject files it cannot open
     * that were created with previous versions of GTK.
     * 
     * The intended use of this functions is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(): GLib.Bytes
    /**
     * Releases a reference on the given `GskRenderNode`.
     * 
     * If the reference was the last, the resources associated to the `node` are
     * freed.
     */
    unref(): void
    /**
     * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump a render
     * node to a file for later inspection.
     * @param filename the file to save it to.
     */
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, transform: Transform): TransformNode
    constructor(child: RenderNode, transform: Transform)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, transform: Transform): TransformNode
}
abstract class BroadwayRendererClass {
    static name: string
}
abstract class CairoRendererClass {
    static name: string
}
/**
 * A color stop in a gradient node.
 */
class ColorStop {
    /* Own fields of Gsk-4.0.Gsk.ColorStop */
    /**
     * the offset of the color stop
     */
    offset: number
    /**
     * the color at the given offset
     */
    color: Gdk.RGBA
    static name: string
}
abstract class GLRendererClass {
    static name: string
}
abstract class GLShaderClass {
    /* Own fields of Gsk-4.0.Gsk.GLShaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
/**
 * A location in a parse buffer.
 */
class ParseLocation {
    /* Own fields of Gsk-4.0.Gsk.ParseLocation */
    /**
     * the offset of the location in the parse buffer, as bytes
     */
    bytes: number
    /**
     * the offset of the location in the parse buffer, as characters
     */
    chars: number
    /**
     * the line of the location in the parse buffer
     */
    lines: number
    /**
     * the position in the line, as bytes
     */
    line_bytes: number
    /**
     * the position in the line, as characters
     */
    line_chars: number
    static name: string
}
abstract class RendererClass {
    static name: string
}
/**
 * A rectangular region with rounded corners.
 * 
 * Application code should normalize rectangles using
 * [method`Gsk`.RoundedRect.normalize]; this function will ensure that
 * the bounds of the rectangle are normalized and ensure that the corner
 * values are positive and the corners do not overlap.
 * 
 * All functions taking a `GskRoundedRect` as an argument will internally
 * operate on a normalized copy; all functions returning a `GskRoundedRect`
 * will always return a normalized one.
 * 
 * The algorithm used for normalizing corner sizes is described in
 * [the CSS specification](https://drafts.csswg.org/css-backgrounds-3/#border-radius).
 */
class RoundedRect {
    /* Own fields of Gsk-4.0.Gsk.RoundedRect */
    /**
     * the bounds of the rectangle
     */
    bounds: Graphene.Rect
    /**
     * the size of the 4 rounded corners
     */
    corner: Graphene.Size[]
    /* Owm methods of Gsk-4.0.Gsk.RoundedRect */
    /**
     * Checks if the given `point` is inside the rounded rectangle.
     * @param point the point to check
     */
    contains_point(point: Graphene.Point): boolean
    /**
     * Checks if the given `rect` is contained inside the rounded rectangle.
     * @param rect the rectangle to check
     */
    contains_rect(rect: Graphene.Rect): boolean
    /**
     * Initializes the given `GskRoundedRect` with the given values.
     * 
     * This function will implicitly normalize the `GskRoundedRect`
     * before returning.
     * @param bounds a `graphene_rect_t` describing the bounds
     * @param top_left the rounding radius of the top left corner
     * @param top_right the rounding radius of the top right corner
     * @param bottom_right the rounding radius of the bottom right corner
     * @param bottom_left the rounding radius of the bottom left corner
     */
    init(bounds: Graphene.Rect, top_left: Graphene.Size, top_right: Graphene.Size, bottom_right: Graphene.Size, bottom_left: Graphene.Size): RoundedRect
    /**
     * Initializes `self` using the given `src` rectangle.
     * 
     * This function will not normalize the `GskRoundedRect`,
     * so make sure the source is normalized.
     * @param src a `GskRoundedRect`
     */
    init_copy(src: RoundedRect): RoundedRect
    /**
     * Initializes `self` to the given `bounds` and sets the radius
     * of all four corners to `radius`.
     * @param bounds a `graphene_rect_t`
     * @param radius the border radius
     */
    init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect
    /**
     * Checks if part of the given `rect` is contained inside the rounded rectangle.
     * @param rect the rectangle to check
     */
    intersects_rect(rect: Graphene.Rect): boolean
    /**
     * Checks if all corners of `self` are right angles and the
     * rectangle covers all of its bounds.
     * 
     * This information can be used to decide if [ctor`Gsk`.ClipNode.new]
     * or [ctor`Gsk`.RoundedClipNode.new] should be called.
     */
    is_rectilinear(): boolean
    /**
     * Normalizes the passed rectangle.
     * 
     * This function will ensure that the bounds of the rectangle
     * are normalized and ensure that the corner values are positive
     * and the corners do not overlap.
     */
    normalize(): RoundedRect
    /**
     * Offsets the bound's origin by `dx` and `dy`.
     * 
     * The size and corners of the rectangle are unchanged.
     * @param dx the horizontal offset
     * @param dy the vertical offset
     */
    offset(dx: number, dy: number): RoundedRect
    /**
     * Shrinks (or grows) the given rectangle by moving the 4 sides
     * according to the offsets given.
     * 
     * The corner radii will be changed in a way that tries to keep
     * the center of the corner circle intact. This emulates CSS behavior.
     * 
     * This function also works for growing rectangles if you pass
     * negative values for the `top,` `right,` `bottom` or `left`.
     * @param top How far to move the top side downwards
     * @param right How far to move the right side to the left
     * @param bottom How far to move the bottom side upwards
     * @param left How far to move the left side to the right
     */
    shrink(top: number, right: number, bottom: number, left: number): RoundedRect
    static name: string
}
/**
 * An object to build the uniforms data for a `GskGLShader`.
 */
class ShaderArgsBuilder {
    /* Owm methods of Gsk-4.0.Gsk.ShaderArgsBuilder */
    /**
     * Increases the reference count of a `GskShaderArgsBuilder` by one.
     */
    ref(): ShaderArgsBuilder
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of bool type.
     * @param idx index of the uniform
     * @param value value to set the uniform to
     */
    set_bool(idx: number, value: boolean): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of float type.
     * @param idx index of the uniform
     * @param value value to set the uniform to
     */
    set_float(idx: number, value: number): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of int type.
     * @param idx index of the uniform
     * @param value value to set the uniform to
     */
    set_int(idx: number, value: number): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of uint type.
     * @param idx index of the uniform
     * @param value value to set the uniform to
     */
    set_uint(idx: number, value: number): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of vec2 type.
     * @param idx index of the uniform
     * @param value value to set the uniform too
     */
    set_vec2(idx: number, value: Graphene.Vec2): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of vec3 type.
     * @param idx index of the uniform
     * @param value value to set the uniform too
     */
    set_vec3(idx: number, value: Graphene.Vec3): void
    /**
     * Sets the value of the uniform `idx`.
     * 
     * The uniform must be of vec4 type.
     * @param idx index of the uniform
     * @param value value to set the uniform too
     */
    set_vec4(idx: number, value: Graphene.Vec4): void
    /**
     * Creates a new `GBytes` args from the current state of the
     * given `builder`.
     * 
     * Any uniforms of the shader that have not been explicitly set on
     * the `builder` are zero-initialized.
     * 
     * The given `GskShaderArgsBuilder` is reset once this function returns;
     * you cannot call this function multiple times on the same `builder` instance.
     * 
     * This function is intended primarily for bindings. C code should use
     * [method`Gsk`.ShaderArgsBuilder.free_to_args].
     */
    to_args(): GLib.Bytes
    /**
     * Decreases the reference count of a `GskShaderArgBuilder` by one.
     * 
     * If the resulting reference count is zero, frees the builder.
     */
    unref(): void
    static name: string
    static new(shader: GLShader, initial_values: GLib.Bytes | null): ShaderArgsBuilder
    constructor(shader: GLShader, initial_values: GLib.Bytes | null)
    /* Static methods and pseudo-constructors */
    static new(shader: GLShader, initial_values: GLib.Bytes | null): ShaderArgsBuilder
}
/**
 * The shadow parameters in a shadow node.
 */
class Shadow {
    /* Own fields of Gsk-4.0.Gsk.Shadow */
    /**
     * the color of the shadow
     */
    color: Gdk.RGBA
    /**
     * the horizontal offset of the shadow
     */
    dx: number
    /**
     * the vertical offset of the shadow
     */
    dy: number
    /**
     * the radius of the shadow
     */
    radius: number
    static name: string
}
/**
 * `GskTransform` is an object to describe transform matrices.
 * 
 * Unlike `graphene_matrix_t`, `GskTransform` retains the steps in how
 * a transform was constructed, and allows inspecting them. It is modeled
 * after the way CSS describes transforms.
 * 
 * `GskTransform` objects are immutable and cannot be changed after creation.
 * This means code can safely expose them as properties of objects without
 * having to worry about others changing them.
 */
class Transform {
    /* Owm methods of Gsk-4.0.Gsk.Transform */
    /**
     * Checks two transforms for equality.
     * @param second the second transform
     */
    equal(second: Transform | null): boolean
    /**
     * Returns the category this transform belongs to.
     */
    get_category(): TransformCategory
    /**
     * Inverts the given transform.
     * 
     * If `self` is not invertible, %NULL is returned.
     * Note that inverting %NULL also returns %NULL, which is
     * the correct inverse of %NULL. If you need to differentiate
     * between those cases, you should check `self` is not %NULL
     * before calling this function.
     */
    invert(): Transform | null
    /**
     * Multiplies `next` with the given `matrix`.
     * @param matrix the matrix to multiply `next` with
     */
    matrix(matrix: Graphene.Matrix): Transform
    /**
     * Applies a perspective projection transform.
     * 
     * This transform scales points in X and Y based on their Z value,
     * scaling points with positive Z values away from the origin, and
     * those with negative Z values towards the origin. Points
     * on the z=0 plane are unchanged.
     * @param depth distance of the z=0 plane. Lower values give a more   flattened pyramid and therefore a more pronounced   perspective effect.
     */
    perspective(depth: number): Transform
    /**
     * Converts `self` into a human-readable string representation suitable
     * for printing.
     * 
     * The result of this function can later be parsed with
     * [func`Gsk`.Transform.parse].
     * @param string The string to print into
     */
    print(string: GLib.String): void
    /**
     * Acquires a reference on the given `GskTransform`.
     */
    ref(): Transform | null
    /**
     * Rotates `next` `angle` degrees in 2D - or in 3D-speak, around the z axis.
     * @param angle the rotation angle, in degrees (clockwise)
     */
    rotate(angle: number): Transform | null
    /**
     * Rotates `next` `angle` degrees around `axis`.
     * 
     * For a rotation in 2D space, use [method`Gsk`.Transform.rotate]
     * @param angle the rotation angle, in degrees (clockwise)
     * @param axis The rotation axis
     */
    rotate_3d(angle: number, axis: Graphene.Vec3): Transform | null
    /**
     * Scales `next` in 2-dimensional space by the given factors.
     * 
     * Use [method`Gsk`.Transform.scale_3d] to scale in all 3 dimensions.
     * @param factor_x scaling factor on the X axis
     * @param factor_y scaling factor on the Y axis
     */
    scale(factor_x: number, factor_y: number): Transform | null
    /**
     * Scales `next` by the given factors.
     * @param factor_x scaling factor on the X axis
     * @param factor_y scaling factor on the Y axis
     * @param factor_z scaling factor on the Z axis
     */
    scale_3d(factor_x: number, factor_y: number, factor_z: number): Transform | null
    /**
     * Applies a skew transform.
     * @param skew_x skew factor, in degrees, on the X axis
     * @param skew_y skew factor, in degrees, on the Y axis
     */
    skew(skew_x: number, skew_y: number): Transform | null
    /**
     * Converts a `GskTransform` to a 2D transformation matrix.
     * 
     * `self` must be a 2D transformation. If you are not
     * sure, use gsk_transform_get_category() >=
     * %GSK_TRANSFORM_CATEGORY_2D to check.
     * 
     * The returned values have the following layout:
     * 
     * ```
     *   | xx yx |   |  a  b  0 |
     *   | xy yy | = |  c  d  0 |
     *   | dx dy |   | tx ty  1 |
     * ```
     * 
     * This function can be used to convert between a `GskTransform`
     * and a matrix type from other 2D drawing libraries, in particular
     * Cairo.
     */
    to_2d(): [ /* out_xx */ number, /* out_yx */ number, /* out_xy */ number, /* out_yy */ number, /* out_dx */ number, /* out_dy */ number ]
    /**
     * Converts a `GskTransform` to 2D transformation factors.
     * 
     * To recreate an equivalent transform from the factors returned
     * by this function, use
     * 
     *     gsk_transform_skew (
     *         gsk_transform_scale (
     *             gsk_transform_rotate (
     *                 gsk_transform_translate (NULL, &GRAPHENE_POINT_T (dx, dy)),
     *                 angle),
     *             scale_x, scale_y),
     *         skew_x, skew_y)
     * 
     * `self` must be a 2D transformation. If you are not sure, use
     * 
     *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D
     * 
     * to check.
     */
    to_2d_components(): [ /* out_skew_x */ number, /* out_skew_y */ number, /* out_scale_x */ number, /* out_scale_y */ number, /* out_angle */ number, /* out_dx */ number, /* out_dy */ number ]
    /**
     * Converts a `GskTransform` to 2D affine transformation factors.
     * 
     * To recreate an equivalent transform from the factors returned
     * by this function, use
     * 
     *     gsk_transform_scale (gsk_transform_translate (NULL,
     *                                                   &GRAPHENE_POINT_T (dx, dy)),
     *                          sx, sy)
     * 
     * `self` must be a 2D affine transformation. If you are not
     * sure, use
     * 
     *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D_AFFINE
     * 
     * to check.
     */
    to_affine(): [ /* out_scale_x */ number, /* out_scale_y */ number, /* out_dx */ number, /* out_dy */ number ]
    /**
     * Computes the actual value of `self` and stores it in `out_matrix`.
     * 
     * The previous value of `out_matrix` will be ignored.
     */
    to_matrix(): /* out_matrix */ Graphene.Matrix
    /**
     * Converts a matrix into a string that is suitable for printing.
     * 
     * The resulting string can be parsed with [func`Gsk`.Transform.parse].
     * 
     * This is a wrapper around [method`Gsk`.Transform.print].
     */
    to_string(): string
    /**
     * Converts a `GskTransform` to a translation operation.
     * 
     * `self` must be a 2D transformation. If you are not
     * sure, use
     * 
     *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D_TRANSLATE
     * 
     * to check.
     */
    to_translate(): [ /* out_dx */ number, /* out_dy */ number ]
    /**
     * Applies all the operations from `other` to `next`.
     * @param other Transform to apply
     */
    transform(other: Transform | null): Transform | null
    /**
     * Transforms a `graphene_rect_t` using the given transform `self`.
     * 
     * The result is the bounding box containing the coplanar quad.
     * @param rect a `graphene_rect_t`
     */
    transform_bounds(rect: Graphene.Rect): /* out_rect */ Graphene.Rect
    /**
     * Transforms a `graphene_point_t` using the given transform `self`.
     * @param point a `graphene_point_t`
     */
    transform_point(point: Graphene.Point): /* out_point */ Graphene.Point
    /**
     * Translates `next` in 2-dimensional space by `point`.
     * @param point the point to translate the transform by
     */
    translate(point: Graphene.Point): Transform | null
    /**
     * Translates `next` by `point`.
     * @param point the point to translate the transform by
     */
    translate_3d(point: Graphene.Point3D): Transform | null
    /**
     * Releases a reference on the given `GskTransform`.
     * 
     * If the reference was the last, the resources associated to the `self` are
     * freed.
     */
    unref(): void
    static name: string
    static new(): Transform
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Transform
    /**
     * Parses the given `string` into a transform and puts it in
     * `out_transform`.
     * 
     * Strings printed via [method`Gsk`.Transform.to_string]
     * can be read in again successfully using this function.
     * 
     * If `string` does not describe a valid transform, %FALSE is
     * returned and %NULL is put in `out_transform`.
     * @param string the string to parse
     */
    static parse(string: string): [ /* returnType */ boolean, /* out_transform */ Transform ]
}
}
export default Gsk;