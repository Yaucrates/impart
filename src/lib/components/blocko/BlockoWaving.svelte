<script lang="ts">
    let { scale = 1 } = $props();
</script>

<svg width={300 * scale} height={680 * scale} style="overflow: visible;" viewBox="0 0 300 680" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
        <rect x="160" y="480" width="60" height="200" fill="white"/>
        <rect x="80" y="480" width="60" height="200" fill="white"/>
        <rect 
            x="260" 
            y="240" 
            width="60" 
            height="200" 
            fill="white"
            transform="rotate(-120 260 240)"
        />
        <rect y="220" width="60" height="200" fill="white"/>
        <rect x="80" y="180" width="140" height="280" fill="white"/>
        <rect x="70" width="160" height="160" fill="white"/>
    </g>    
</svg>
