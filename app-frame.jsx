// ponytail: real phone supplies status bar/notch, so the device frame is a passthrough
function IOSDevice({ children }) { return <div style={{ height: '100dvh', overflow: 'auto' }}>{children}</div>; }
Object.assign(window, { IOSDevice });
