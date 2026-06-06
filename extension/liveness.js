// Copyright 2025 Cleo Menezes Jr.
// SPDX-License-Identifier: GPL-3.0-or-later

// get_compositor_private() can return a non-null actor that is already destroyed during
// signal delivery — calling get_frame_rect/move_resize_frame on it segfaults libmutter.
export function isWindowAlive(window) {
    if (!window) return false;
    const actor = window.get_compositor_private();
    return !!actor && !actor.is_destroyed();
}