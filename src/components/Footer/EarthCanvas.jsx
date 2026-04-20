import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function EarthCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Scene / Camera ────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.set(0, 0, 2.8)

    // ── Stars ─────────────────────────────────────────────────
    const starCount = 2200
    const starPositions = new Float32Array(starCount * 3)
    const starSizes = new Float32Array(starCount)
    for (let i = 0; i < starCount; i++) {
      const r = THREE.MathUtils.randFloat(4, 20)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      starPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      starPositions[i * 3 + 2] = r * Math.cos(phi)
      starSizes[i] = THREE.MathUtils.randFloat(0.4, 2.2)
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))

    const starMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xffffff,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      depthWrite: false,
    })
    const stars = new THREE.Points(starGeo, starMat)
    scene.add(stars)

    // ── Twinkling: second sparse layer ────────────────────────
    const sparkCount = 280
    const sparkPos = new Float32Array(sparkCount * 3)
    for (let i = 0; i < sparkCount; i++) {
      const r = THREE.MathUtils.randFloat(3.5, 16)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      sparkPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      sparkPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      sparkPos[i * 3 + 2] = r * Math.cos(phi)
    }
    const sparkGeo = new THREE.BufferGeometry()
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3))
    const sparkMat = new THREE.PointsMaterial({
      size: 0.07,
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      depthWrite: false,
    })
    const sparks = new THREE.Points(sparkGeo, sparkMat)
    scene.add(sparks)

    // ── Earth sphere ──────────────────────────────────────────
    const earthGeo = new THREE.SphereGeometry(1, 64, 64)

    // Base dark surface
    const earthMat = new THREE.MeshPhongMaterial({
      color: 0x050a1a,
      emissive: 0x070e2a,
      shininess: 5,
      transparent: true,
      opacity: 0.96,
    })
    const earth = new THREE.Mesh(earthGeo, earthMat)
    scene.add(earth)

    // ── Latitude / Longitude grid ─────────────────────────────
    const gridGroup = new THREE.Group()

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.22,
    })

    // latitudes
    for (let lat = -80; lat <= 80; lat += 20) {
      const phi = THREE.MathUtils.degToRad(90 - lat)
      const pts = []
      for (let lon = 0; lon <= 360; lon += 2) {
        const theta = THREE.MathUtils.degToRad(lon)
        pts.push(new THREE.Vector3(
          1.001 * Math.sin(phi) * Math.cos(theta),
          1.001 * Math.cos(phi),
          1.001 * Math.sin(phi) * Math.sin(theta),
        ))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      gridGroup.add(new THREE.Line(geo, lineMat))
    }

    // longitudes
    for (let lon = 0; lon < 360; lon += 20) {
      const theta = THREE.MathUtils.degToRad(lon)
      const pts = []
      for (let lat = -90; lat <= 90; lat += 2) {
        const phi = THREE.MathUtils.degToRad(90 - lat)
        pts.push(new THREE.Vector3(
          1.001 * Math.sin(phi) * Math.cos(theta),
          1.001 * Math.cos(phi),
          1.001 * Math.sin(phi) * Math.sin(theta),
        ))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      gridGroup.add(new THREE.Line(geo, lineMat))
    }
    earth.add(gridGroup)

    // ── Continent dots ────────────────────────────────────────
    const dotCount = 8000
    const dotPositions = new Float32Array(dotCount * 3)
    const continentDotMat = new THREE.PointsMaterial({
      size: 0.012,
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
    })

    // distribute points on sphere surface
    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(1 - 2 * Math.random())
      const theta = Math.random() * Math.PI * 2
      const r = 1.003
      dotPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      dotPositions[i * 3 + 1] = r * Math.cos(phi)
      dotPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3))
    const dots = new THREE.Points(dotGeo, continentDotMat)
    earth.add(dots)

    // ── Atmosphere glow ───────────────────────────────────────
    const atmGeo = new THREE.SphereGeometry(1.08, 64, 64)
    const atmMat = new THREE.MeshPhongMaterial({
      color: 0x1a0550,
      emissive: 0x3b0764,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
    })
    const atmosphere = new THREE.Mesh(atmGeo, atmMat)
    scene.add(atmosphere)

    // ── Outer glow ring ───────────────────────────────────────
    const glowGeo = new THREE.SphereGeometry(1.15, 64, 64)
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x4c1d95,
      transparent: true,
      opacity: 0.055,
      side: THREE.BackSide,
    })
    scene.add(new THREE.Mesh(glowGeo, glowMat))

    // ── Orbiting ring ─────────────────────────────────────────
    const ringGeo = new THREE.TorusGeometry(1.38, 0.004, 8, 200)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.35,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2.2
    scene.add(ring)

    // second ring
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.52, 0.002, 8, 200),
      new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.2 }),
    )
    ring2.rotation.x = Math.PI / 2.6
    ring2.rotation.z = 0.4
    scene.add(ring2)

    // ── Connection arcs (animated nodes) ─────────────────────
    const nodeCount = 14
    const nodes = []
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff })

    function latLonToVec3(lat, lon, r = 1.015) {
      const phi = THREE.MathUtils.degToRad(90 - lat)
      const theta = THREE.MathUtils.degToRad(lon)
      return new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      )
    }

    const nodeCoords = [
      [51, 0], [40.7, -74], [35.7, 139], [-33.9, 151],
      [48.9, 2.3], [55.8, 37.6], [1.3, 103.8], [19.1, 72.9],
      [25.2, 55.3], [-23.5, -46.6], [37.6, -122], [30.0, 31.2],
      [59.9, 10.7], [43.7, 7.3],
    ]

    nodeCoords.forEach(([lat, lon]) => {
      const pos = latLonToVec3(lat, lon)
      const geo = new THREE.SphereGeometry(0.018, 8, 8)
      const mesh = new THREE.Mesh(geo, nodeMat.clone())
      mesh.position.copy(pos)
      earth.add(mesh)
      nodes.push({ mesh, pos, pulsePhase: Math.random() * Math.PI * 2 })
    })

    // arcs between some node pairs
    const arcMat = new THREE.LineBasicMaterial({
      color: 0x00e5ff, transparent: true, opacity: 0.35,
    })
    const arcPairs = [[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[7,8],[9,10],[10,11],[0,4],[3,6],[8,13]]

    arcPairs.forEach(([a, b]) => {
      const start = nodeCoords[a]
      const end   = nodeCoords[b]
      const pts = []
      for (let t = 0; t <= 1; t += 0.025) {
        const sV = latLonToVec3(start[0], start[1])
        const eV = latLonToVec3(end[0], end[1])
        const mid = sV.clone().lerp(eV, t)
        const height = 1 + 0.28 * Math.sin(Math.PI * t)
        mid.normalize().multiplyScalar(height)
        pts.push(mid)
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      earth.add(new THREE.Line(geo, arcMat.clone()))
    })

    // ── Lights ────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x222244, 2.5)
    scene.add(ambientLight)

    const sunLight = new THREE.DirectionalLight(0x8866ff, 3.5)
    sunLight.position.set(3, 2, 3)
    scene.add(sunLight)

    const rimLight = new THREE.DirectionalLight(0x00e5ff, 1.2)
    rimLight.position.set(-3, -1, -2)
    scene.add(rimLight)

    // ── Resize handler ────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── Mouse parallax ────────────────────────────────────────
    let mouseX = 0, mouseY = 0
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Animation loop ────────────────────────────────────────
    let frameId
    const clock = new THREE.Clock()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // slow earth rotation
      earth.rotation.y = t * 0.08

      // star drift
      stars.rotation.y  = t * 0.006
      stars.rotation.x  = t * 0.002
      sparks.rotation.y = -t * 0.004

      // ring spin
      ring.rotation.z  = t * 0.12
      ring2.rotation.z = -t * 0.08

      // camera parallax
      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.04
      camera.position.y += (-mouseY * 0.2 - camera.position.y) * 0.04
      camera.lookAt(scene.position)

      // node pulse
      nodes.forEach(({ mesh, pulsePhase }) => {
        const s = 1 + 0.5 * Math.sin(t * 2.5 + pulsePhase)
        mesh.scale.setScalar(s)
        mesh.material.opacity = 0.5 + 0.5 * Math.sin(t * 2 + pulsePhase)
        mesh.material.transparent = true
      })

      // twinkle sparks
      sparkMat.opacity = 0.45 + 0.25 * Math.sin(t * 1.3)

      renderer.render(scene, camera)
    }
    animate()

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="earth-canvas" />
}
