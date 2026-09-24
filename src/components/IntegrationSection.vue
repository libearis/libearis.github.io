<script setup>
const flow = [
  { cls: "node-a", lang: ".NET · C#", title: "Gentongku Admin", desc: "Spots a bug and files a report" },
  { wire: true, label: "CreateIssue()", sub: "gRPC · HTTP/2 · :50051" },
  { cls: "node-b", lang: "Python · FastAPI", title: "TaskFlow IssueIntake", desc: 'Validates and creates a task in "External Reports"' },
  { wire: true, label: "outbox event", sub: "Postgres → Mongo" },
  { cls: "node-c", lang: "Vue 3 · grpc-web", title: "Live Board", desc: "Task shows up via server-streaming" },
];

const points = [
  { title: "Native gRPC, no proxy", body: "The .NET client connects straight to <code>:50051</code>. Envoy only sits in front of the browser's grpc-web stream." },
  { title: "Zero setup on the receiving side", body: "The first call auto-provisions an <em>\"External Reports\"</em> project. Each ticket carries its severity and who reported it." },
  { title: "Same pipeline as every other task", body: "External tickets go through TaskFlow's normal CQRS and outbox flow. Nothing special-cased." },
  { title: "Honest scope", body: "Fire-and-forget by design: no status callback yet, and that's documented rather than hidden." },
];
</script>

<template>
  <section id="integration" class="section container">
    <div v-reveal class="section-head">
      <p class="kicker">02 — Integration</p>
      <h2>When Gentongku breaks, TaskFlow gets a ticket</h2>
      <p class="muted">
        Two separate apps in two languages, connected by a single unary gRPC call.
        When a Gentongku admin finds a bug, they file it right away, and it lands on the TaskFlow board as a task.
      </p>
    </div>

    <div
      v-reveal
      class="flow"
      role="img"
      aria-label="Flow: Gentongku admin sends CreateIssue over gRPC to TaskFlow IssueIntake, which creates a task in the External Reports project, goes through the outbox worker to MongoDB, and is streamed live to the board."
    >
      <template v-for="(step, i) in flow" :key="i">
        <div v-if="step.wire" class="wire">
          <span class="wire-label mono">{{ step.label }}</span>
          <span class="wire-line"><span class="packet" :style="{ animationDelay: i > 1 ? '1.2s' : '0s' }"></span></span>
          <span class="wire-sub mono">{{ step.sub }}</span>
        </div>
        <div v-else class="node" :class="step.cls">
          <span class="node-lang">{{ step.lang }}</span>
          <strong>{{ step.title }}</strong>
          <small>{{ step.desc }}</small>
        </div>
      </template>
    </div>

    <div class="integration-grid">
      <div v-reveal class="points">
        <div v-for="(p, i) in points" :key="p.title" class="point">
          <span class="num">{{ i + 1 }}</span>
          <div>
            <h4>{{ p.title }}</h4>
            <p v-html="p.body"></p>
          </div>
        </div>
      </div>

      <div v-reveal="1" class="code-window">
        <div class="code-bar">
          <span></span><span></span><span></span>
          <p class="mono">issue_intake.proto</p>
        </div>
<pre class="mono"><code><span class="k">service</span> <span class="t">IssueIntake</span> {
  <span class="k">rpc</span> <span class="f">CreateIssue</span> (<span class="t">CreateIssueRequest</span>)
      <span class="k">returns</span> (<span class="t">CreateIssueResponse</span>);
}

<span class="k">message</span> <span class="t">CreateIssueRequest</span> {
  <span class="k">string</span> title        = <span class="n">1</span>;
  <span class="k">string</span> description  = <span class="n">2</span>;
  <span class="k">string</span> severity     = <span class="n">3</span>; <span class="c">// low | medium | high</span>
  <span class="k">string</span> trigger_type = <span class="n">4</span>; <span class="c">// manual | automated</span>
  <span class="k">string</span> reported_by  = <span class="n">5</span>;
}</code></pre>
      </div>
    </div>
  </section>
</template>
